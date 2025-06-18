import './Creator.css'
import beatrizImg from '../../../assets/beatriz.jpg'

function Creator () {
    return(
        <div className='creator' id='Fundadora'>
            <div className="creator-image">
                <img src={beatrizImg} alt="Premio ABA" />
            </div>
            <div className='creator-content'>
                <div className='creator-text'>
                    <h1 className="creator-title">
                        Nossa fundadora                        
                    </h1>
                    <p className="discription-creator">
                        Beatriz Azevedo é CEO e fundadora da ABA Climate Solutions, 
                        consultoria com foco em sustentabilidade e financiamento climático.
                        <br/>
                        <br/>
                        Advogada, mestre em Políticas Públicas pela Universidade de Oxford (Reino Unido), 
                        com bolsa Chevening-Lemann, e pós-graduada em Direito Ambiental e Urbanístico pela PUC-Minas,  
                        Beatriz tem mais de uma década de experiência na área de clima.
                        <br/>
                        <br/>
                        Desde 2013, participa ativamente das conferências da ONU sobre mudanças climáticas e, em 2024, 
                        tornou-se a primeira brasileira reconhecida com o prêmio Land Heroes, 
                        concedido pela Convenção das Nações Unidas de Combate à Desertificação (UNCCD).
                        <br/>
                        <br/>
                        Atualmente, preside a Comissão de Direito Ambiental da OAB Ceará e é Conselheira do Conselho Estadual 
                        do Meio Ambiente do Ceará. Sua atuação combina visão jurídica, técnica e estratégica, com o propósito 
                        de transformar a sustentabilidade em uma oportunidade real de inovação e impacto positivo, 
                        especialmente em setores-chave como o saneamento ambiental.
                    </p>
                </div>
            </div>
            
        </div>
        
    );
}

export default Creator;