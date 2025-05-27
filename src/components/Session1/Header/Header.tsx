import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import './Header.css'

function Header () {
    return(
        <header>
            <div className="header-inner">
                <Logo/>
                <Menu/>
            </div>
        </header>
        
    );
}

export default Header;