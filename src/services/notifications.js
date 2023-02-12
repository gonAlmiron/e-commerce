import twilio from 'twilio';
import dotenv from 'dotenv';
import { createTransport } from 'nodemailer';


dotenv.config();

// WHATSAPP

export const twilioClient = twilio(process.env.SID, process.env.TOKEN);


// EMAIL 

export const transporter = createTransport({
    // host:'smtp.gmail.com',
    service: 'gmail',
    port:process.env.PORT_GMAIL,
    auth: {
        user:process.env.EMAIL,
        pass:process.env.PASSWORD,
    }
});

