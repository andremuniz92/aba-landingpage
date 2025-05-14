import './Menu.css'

const Menu = () => {
    return(
        <ul className='menu-list'>
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#Sobre">Sobre</a>
            </li>
            <li>
                <a href="#Servicos">Serviços</a>
            </li>
            <li>
                <a href="#">Artigos</a>
            </li>
            <li>
                <a href="#Contato">Contato</a>
            </li>
        </ul>       
    ); 
    
}

export default Menu;