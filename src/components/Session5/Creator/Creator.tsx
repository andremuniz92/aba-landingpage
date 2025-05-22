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
                    <h1 className="title">
                        Nossa fundadora                        
                    </h1>
                    <p className="discription-creator">
                        Beatriz Azevedo é advogada e consultora em sustentabilidade, especializada em ESG e financiamento climático. 
                        Com uma trajetória acadêmica e profissional sólida, é mestre em Políticas Públicas pela Universidade de Oxford, no Reino Unido,
                        com bolsa Chevening-Lemann, e possui especialização em Direito Ambiental e Urbanístico pela PUC-Minas.
                        <br/>
                        <br/>
                        Atualmente, Beatriz é Presidente da Comissão de Direito Ambiental da OAB Ceará e Conselheira Titular do Conselho Estadual do Meio Ambiente (COEMA). 
                        Além disso, atua como consultora de Financiamento Climático para organizações de grande relevância, como CAGECE, AESBE, Instituto Aya e Club de Madrid.
                        <br/>
                        <br/>
                        Com uma forte presença no cenário ambiental, Beatriz tem certificação da Global Reporting Initiative (GRI) e é Multiplicadora B pelo Sistema B. 
                        Seu portfólio inclui projetos estratégicos com instituições como Esphera, Mota Machado, World Resources Institute – Brasil (WRI Brasil), Cities4Forests, 
                        Secretaria de Meio Ambiente do Ceará e Instituto de Planejamento de Fortaleza.
                        <br/>
                        <br/>
                        Desde 2013, Beatriz participa das conferências de clima da ONU, contribuindo para o debate global sobre sustentabilidade e políticas ambientais. 
                        Sua trajetória também inclui a cofundação e presidência do Instituto Verdeluz, além da fundação e pesquisa no Grupo de Estudos em Direito 
                        e Assuntos Internacionais (GEDAI) da Universidade Federal do Ceará.
                        <br/>
                        <br/>
                        Com sua expertise e visão estratégica, Beatriz lidera a ABA Climate Solutions com o propósito de transformar a sustentabilidade 
                        em uma oportunidade real para empresas e instituições, promovendo impacto positivo e inovação.
                    </p>
                </div>
            </div>
            
        </div>
        
    );
}

export default Creator;