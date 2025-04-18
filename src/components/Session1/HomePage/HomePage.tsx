import LogoHome from '../Logo/LogoHome';
import LogoDiscription from '../LogoDiscription/LogoDiscription';
import './HomePage.css'

function HomePage () {
    return(
        <div className='home'>
            <LogoDiscription/>
            <LogoHome/>
        </div>
        
    );
}

export default HomePage;