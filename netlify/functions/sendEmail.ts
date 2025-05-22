import { Handler } from '@netlify/functions';
import sgMail from '@sendgrid/mail';
import 'dotenv/config';

const handler: Handler = async (event: any) => {
  const { email, message } = JSON.parse(event.body || '{}');

  if (!email || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Email e mensagem são obrigatórios' }),
    };
  }

  sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

  const msg = {
    to: process.env.EMAIL_USER as string,              // Para onde vai o email (ex: contato@abasolutions.com.br)
    from: process.env.EMAIL_USER as string,            // De quem aparenta ser (use o mesmo no plano gratuito)
    subject: `Contato via site do ABA Solutions (${email})`,
    text: message,
  };
  console.log(process.env.EMAIL_USER)
  try {
    await sgMail.send(msg);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email enviado com sucesso' }),
    };
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Erro ao enviar o email: '+ error }),
    };
  }
};

export { handler };
