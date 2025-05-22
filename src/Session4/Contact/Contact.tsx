import './Contact.css';
import { useState } from 'react';
import bannerContato from '../../assets/logo-home2.png'

function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Enviando...');

    const response = await fetch('/.netlify/functions/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, message }),
    });

    if (response.ok) {
      setStatus('Mensagem enviada com sucesso!');
      setEmail('');
      setMessage('');
    } else {
      setStatus('Erro ao enviar. Tente novamente.');
    }
  };

  return (
      <div className="contact-page"  id='Contato'>
        <div className="contact-content">
          <img src={bannerContato} alt="Banner Contato" className="contact-banner" />
          <div className="contact-box">
            <h2>Entre em contato</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <textarea
                placeholder="Sua mensagem"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
              <button type="submit">Enviar</button>
            </form>
            {status && <p className="status">{status}</p>}
          </div>
        </div>
      </div>
  );
}

export default Contact;