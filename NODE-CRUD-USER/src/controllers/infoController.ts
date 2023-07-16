import { Request, Response } from 'express';
import { Historico } from '../models/Historico';

export const historico = async (req: Request, res: Response)=>{
    let corEscolhida: string = req.params.corEscolhida;
    let corResultado: string = req.params.corResultado;
    let quantidadeErros: number = Number(req.params.quantidadeErros);

    let strData = new Date().toLocaleDateString('pt-BR');
    let hora = new Date().toLocaleTimeString('pt-BR');
    let dataeHora = strData+' - '+hora;
    const historico = await Historico.create({
        data: dataeHora,
        corEscolhida: corEscolhida,
        corResultado: corResultado,
        quantidadeErros: quantidadeErros
    });
};

export const sobre = (req: Request, res: Response)=>{
    res.render('pages/sobre');
};