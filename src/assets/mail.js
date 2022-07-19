import * as nodemailer from "nodemailer";
import { environment } from '../environments/environment';

export class MailService {

  transporter

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: "email-ssl.com.br",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: environment.email,
        pass: environment.pass,
      }
    });
  }

  enviar(emailTo, subject, text) {
    this.transporter.sendMail({
      from: environment.email,
      to: 'carlosgmr2304@gmail.com',
      subject: subject,
      replyTo: emailTo,
      text: text
    });
  }

}

module.exports = { enviar }
