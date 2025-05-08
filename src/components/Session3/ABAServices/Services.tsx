import './Services.css'
import conferenceAba from '../../../assets/aba-conference.jpeg'
import ServicesAccordion from '../Accordion/ServicesAccordion';

function Services () {
    return(
        <div className='service' id='Servicos'>
            <div className="about-image">
                <img src={conferenceAba} alt="Conferencia ABA" />
            </div>
            <div className='service-content'>
                <div className='service-text'>
                    <h1 className="service-title">
                        Nossos serviços                      
                    </h1>
                    <div className="discription-service">
                        <ServicesAccordion/>
                    </div>
                </div>
            </div>           
        </div>      
    );
}

export default Services;