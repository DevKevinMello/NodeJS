import { Request, Response } from 'express';
import nodemailer from 'nodemailer';

export const contato = async (req: Request, res: Response) => {

    //PASSO 1 - Configurar o transporter(smtp)

    let transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "08cc3fe830bf3f",
          pass: "8b147e0c9e0221"
        }
    });

    //PASSO 2 - Configurar a mensagem

    let message = {
        from: 'nao-responda@teste.com',
        to: 'teste1@hotmail.com, teste2@hotmail.com',
        replyTo: 'respostas@teste.com',
        subject: 'Assunto legal',
        html: 'Olá <strong>Teste</strong>, como vai?',
        text: 'Olá Teste, como vai?'
    }

    //PASSO 3 - Enviar a mensagem

    let info = await transport.sendMail(message);
    console.log('info', info);

    res.json({success: true});
}