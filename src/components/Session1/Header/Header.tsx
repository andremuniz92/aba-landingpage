import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import './Header.css'

function Header () {
    return(
        <header>
            <Logo/>
            <Menu/>
        </header>
        
    );
}

export default Header;