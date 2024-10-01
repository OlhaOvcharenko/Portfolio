import { Injectable } from '@nestjs/common';
import * as nodemailer from "nodemailer";

@Injectable()
export class EmailService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
        auth: {
            user: process.env.EMAIL_USER, 
            pass: process.env.PASSWORD, 
        },
    });
  }

  async sendEmail(fromEmail: string, subject: string, message: string, name: string) {
    const mailOptions = {
    from: fromEmail, 
    to: 'ovcharenko2298@gmsil.com', 
    replyTo: fromEmail, 
    subject: subject, 
    text: `From: ${name} \n\n ${message}`, 
    };

    try {
    const info = await this.transporter.sendMail(mailOptions);
    console.log('Email sent: %s', info.messageId);
    return { success: true };
    } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
    }
  }
}
