import React, { useState } from "react"
import MenuContainer from './MenuContainer';
import "./styles.css"

const Menu = () => {
    
    const [ openMenu, setOpenMenu ] = useState(false);

    const toggleMenu = () => {
        const header = document.querySelector('.header');

        if (header !== null) {
            header.classList.toggle('open-menu');
        }

        setOpenMenu(!openMenu);
    }

    return (
        <>
            <nav onClick={toggleMenu} className='nav-menu'>
                menu
            </nav>
            <MenuContainer />
        </>
    )
};

export default Menu;