import React from "react"
import MenuContainer from './MenuContainer';
import "./styles.css"

const Menu = () => {
    
    const toggleMenu = (e) => {
        const slider = document.querySelector('.container-slider');
        slider.classList.toggle('open-menu');
        e.target.nextSibling.classList.toggle('open-menu');
    }

    return (
        <>
            <nav onClick={toggleMenu} className="nav-menu">
                menu
            </nav>
            <MenuContainer />
        </>
    )
};

export default Menu;