import { unlink } from 'fs/promises';
import { Request, Response } from 'express';
import sharp from 'sharp';
import { Frase } from '../models/frases';

export const ping = (req: Request, res: Response) => {
    res.json({pong: true});
}

export const uploadFile = async (req: Request, res: Response) => {
    
    if( req.file ){
        const filename = `${req.file.filename}.jpg`;

        await sharp(req.file.path)
        .resize(300, 300, {
            fit: sharp.fit.cover,
            position: 'top'
        })
        .toFormat('jpeg')
        .toFile(`./public/media/${filename}.jpg`);

        await unlink(req.file.path);
        
        res.json({ image: `${filename}.jpg` });

    }else{
        res.status(400);
        res.json({ error: 'Arquivo inválido' });
    }
}