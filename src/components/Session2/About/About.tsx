import './About.css'
import premioAba from '../../../assets/premio-aba.jpg'

function About () {
    return(
        <div className='about' id='Sobre'>
            <div className='about-content'>
                <div className='about-text'>
                    <p className="tagline">Sobre nós</p>
                    <h1 className="title">
                        A ABA Solutions                        
                    </h1>
                    <p className="discription-about">
                        Com uma abordagem multidisciplinar e uma ampla rede de contatos nacionais e internacionais, oferecemos soluções personalizadas para associações, 
                        empresas públicas e privadas. Nosso trabalho envolve elaboração de estudos de caso, articulação governamental e estratégias de financiamento climático, 
                        garantindo que nossos clientes tenham acesso às melhores práticas globais.
                        <br/>
                        <br/>
                        Ao longo da nossa trajetória, tivemos a oportunidade de desenvolver projetos de alto impacto em parceria com grandes instituições, 
                        como a Cagece, Instituto Aya, Club de Madrid, Beach Park e a Associação Brasileira das Empresas Estaduais de Saneamento (AESBE).
                        <br/>
                        <br/>
                        Nosso compromisso é transformar desafios ambientais em oportunidades reais de crescimento e desenvolvimento, ajudando nossos clientes 
                        a construírem um futuro mais sustentável.
                    </p>
                </div>
            </div>
            <div className="about-image">
                <img src={premioAba} alt="Premio ABA" />
            </div>
        </div>
        
    );
}

export default About;