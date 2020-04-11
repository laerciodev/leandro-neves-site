import React, { useState } from "react"
import MenuContainer from './MenuContainer';
import "./styles.css"

const Menu = () => {
    
    const [ openMenu, setOpenMenu ] = useState(false);

    const slider = document.querySelector('.container-slider');

    const toggleMenu = () => {
        if (slider !== null) {
            slider.classList.toggle('open-menu');
        }
        setOpenMenu(!openMenu);
    }

    return (
        <>
            <nav onClick={toggleMenu} className='nav-menu'>
                menu
            </nav>
            <MenuContainer openMenu={openMenu}/>
        </>
    )
};

export default Menu;