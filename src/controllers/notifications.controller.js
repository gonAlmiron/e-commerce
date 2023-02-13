import { transporter } from "../services/notifications";
import { templateHtml } from '../services/template.js';
import { twilioClient } from "../services/notifications.js";


export const gmailController = async (req, res) => {
    const { dest } = req.body;
    const mailOptions = {
        from: process.env.EMAIL,
        to: dest,
        subject: '¡Bienvenido a la comisión 32155!',
        // text: 'Hola, te damos la bienvenida a nuestra comisión de backend.'
        // html: '<h1>Hola, te damos la bienvenida a nuestra comisión de backend.</h1>'
        html: templateHtml,
        attachments: [
            {
                path: process.cwd() + '/src/services/texto.txt',
                filename: 'texto-adjunto-32155'
            }
        ]
    };
    try {
        const response = await transporter.sendMail(mailOptions);
        console.log('Email enviado!');
        res.json(response);
    } catch (error) {
        console.log(error);
    }
}

export const wppController = async(req, res) => {
    try {
      const message = {
        body: req.body.message,
        from: process.env.CEL,
        to: req.body.dest,
        mediaUrl: ['https://cadenaser.com/resizer/c09Az9WzwQFwSZPN90pP1dhNqQ8=/736x552/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/prisaradio/TOLWBLP2DRFWZPVWKRWIQ4WH3I.jpg']
      };
      const response = await twilioClient.messages.create(message);
      res.json(response);
    } catch (error) {
      console.log(error);
    }
  }
  
  export const inboxController = async (req, res) => {
    try {
      console.log(req.body);
      if(req.body.Body.toUpperCase().includes('HOLA')) {
        await sendMessageToClient(req.body.WaId, `Hola ${req.body.ProfileName}!, ¿Cual es tu consulta?`)
      }
      if(req.body.Body.toUpperCase().includes('CHAU')) {
        await sendMessageToClient(req.body.WaId, `Chau ${req.body.ProfileName}!, ¡Hasta pronto!`)
      }
    } catch (error) {
      console.log(error);
    }
  }