import { Request, Response, NextFunction } from 'express';
import JWT from 'jsonwebtoken';
import dotenv from 'dotenv';
import { User } from '../models/User';

dotenv.config();

export const Auth = {
    private: async (req: Request, res: Response, next: NextFunction ) => {
        
        let success = false;

        //JWT TOKEN
        if( req.headers.authorization ){
            
            //Bearer hdasu23dsjsdjskdhdasjknx2=

            const [authType, token] = req.headers.authorization.split(' ');
            if( authType === 'Bearer' ){

                try {
                    JWT.verify(token, process.env.JWT_SECRET_KEY as string);
                    success = true;        
                } catch (error) {
                    
                }
                        
            }
        }

        /* BASIC AUTH
        if( req.headers.authorization ){
            let hash: string = req.headers.authorization.substring(6);
            let decoded: string = Buffer.from(hash, 'base64').toString();
            let data: string[] = decoded.split(':');

            if( data.length === 2 ){
                let hasUser = await User.findOne({
                    where: {
                        email: data[0],
                        password: data[1]
                    }
                });

                if( hasUser ){
                    success = true;
                }
            }
        }
        */

        if(success){
            next();
        }else{
            res.status(403);
            res.json({ error: 'Não autorizado' });
        }
    }
}