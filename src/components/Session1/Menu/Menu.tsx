import { useState } from 'react';
import './Menu.css'

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen)
      }
    
      const handleItemClick = () => {
        setIsOpen(false) // Fecha o menu ao clicar em qualquer item
      }

    return(
        <nav className="navbar">
            <div className="menu-toggle" onClick={handleToggle}>
                ☰
            </div>
            <ul className={`menu-list ${isOpen ? 'open' : ''}`}>
                <li><a href="#Home" onClick={handleItemClick}>Home</a></li>
                <li><a href="#Sobre" onClick={handleItemClick}>Sobre</a></li>
                <li><a href="#Servicos" onClick={handleItemClick}>Serviços</a></li>
                <li><a href="#Artigos" onClick={handleItemClick}>Artigos</a></li>
                <li><a href="#Fundadora" onClick={handleItemClick}>Fundadora</a></li>
                <li><a href="#Contato" onClick={handleItemClick}>Contato</a></li>
            </ul>
        </nav>       
    ); 
    
}

export default Menu;