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

  // Configure o transporte SMTP (exemplo com Gmail)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Contato via site de ${email}`,
      text: message,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email enviado com sucesso' }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Erro ao enviar o email' }),
    };
  }
};

export { handler };
