import { Handler } from '@netlify/functions';
import nodemailer from 'nodemailer';

const handler: Handler = async (event: any) => {
  const { email, message } = JSON.parse(event.body || '{}');

  if (!email || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Email e mensagem são obrigatórios' }),
    };
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.titan.email', // substitua pelo seu host real
    port: 465, // ou 587
    secure: true, // true para 465 (SSL), false para 587 (STARTTLS)
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Contato via site do ABA Solutions do ${email}`,
      text: message,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email enviado com sucesso' }),
    };
  } catch (error: any) {
    console.error('Erro ao enviar email: ', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message || 'Erro ao enviar o email' }),
    };
  }
};

export { handler };
