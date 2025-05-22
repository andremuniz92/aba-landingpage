import './Footer.css';
import logoFooter from '../../assets/logo-home2.png';
import { FaInstagram, FaWhatsapp, FaFacebook, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-column">
          <h4>Contato</h4>
          <nav className="footer-menu">
            <a href="#Home">Home</a>
            <a href="#Sobre">Sobre nós</a>
            <a href="#Servicos">Serviços</a>
            <a href="#Artigos">Artigos</a>
            <a href="#Fundadora">Nossa Fundadora</a>
          </nav>
        </div>

        <div className="footer-column center-column">
          <img src={logoFooter} alt="Logo" className="footer-logo" />
          <div className="footer-social">
            <FaInstagram />
            <FaWhatsapp />
            <FaFacebook />
            <FaLinkedinIn />
          </div>
          <p className="footer-address">
            Fortaleza - Ceará - CE<br />
            55.441.726/0001-51
          </p>
        </div>


        <div className="footer-column right-column">
          {/* <p>telefone: (00) 0000-0000</p> */}
          <p><a>contato@abasolutions.com.br</a></p>
          {/* <p><a href="#PoliticaDeTroca">Política de Privacidade</a></p> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
