import './LogoDiscription.css'
// import logoHome2 from '../../../assets/logo-navbar.png'

function LogoDiscription () {
    return(
        <div className='logo-discription'>
            <h1 className="title">
                ABA                       
            </h1>
            <p className='discription'>
                A ABA Climate Solutions é uma consultoria especializada em sustentabilidade, com foco em financiamento climático e estratégias ESG. 
                Acreditamos que a sustentabilidade não é apenas um desafio, mas uma janela de oportunidades para empresas e organizações que desejam inovar e gerar impacto positivo.
            </p>
            <a href="#Sobre" className='button-saiba-mais'>
                Saiba mais
            </a>  
        </div>
        
    );
}

export default LogoDiscription;