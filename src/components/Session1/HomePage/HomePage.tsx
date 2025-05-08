// import LogoHome from '../Logo/LogoHome';
// import LogoDiscription from '../LogoDiscription/LogoDiscription';
import './HomePage.css'
import logoHome from '../../../assets/logo-home.png'

function HomePage () {
    return(
        // <div className='home'>
        //     <LogoDiscription/>
        //     <LogoHome/>
        // </div>

        <div className='home-home'>
            <div className="home-image">
                <img src={logoHome} alt="Logo ABA Home" />
            </div>
            <div className='home-content'>
                <div className='home-text'>
                    <h1 className="home-title">
                        ABA                    
                    </h1>
                    <div className="discription-home">
                    A ABA Climate Solutions é uma consultoria especializada em sustentabilidade, 
                    com foco em financiamento climático e estratégias ESG. 
                    Acreditamos que a sustentabilidade não é apenas um desafio, 
                    mas uma janela de oportunidades para empresas e organizações que desejam inovar e 
                    gerar impacto positivo.
                    </div>
                    <a href="#Sobre" className='button-saiba-mais'>
                    Saiba mais
                    </a>  
                </div>
            </div>           
        </div>   
        
    );
}

export default HomePage;