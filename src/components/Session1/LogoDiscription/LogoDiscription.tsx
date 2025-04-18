import './LogoDiscription.css'
import logoHome2 from '../../../assets/logo-home2.png'

function LogoDiscription () {
    return(
        <div className='logo-discription'>
            <img src={logoHome2} className="logo2"/>
            <a className='discription'>
                A ABA Climate Solutions é uma consultoria especializada em sustentabilidade, com foco em financiamento climático e estratégias ESG. 
                Acreditamos que a sustentabilidade não é apenas um desafio, mas uma janela de oportunidades para empresas e organizações que desejam inovar e gerar impacto positivo.
            </a>
            <a href="#Sobre" className='button-saiba-mais'>
                Saiba mais
            </a>  
        </div>
        
    );
}

export default LogoDiscription;