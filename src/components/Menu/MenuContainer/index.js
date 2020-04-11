import React from "react";
import { Link } from 'gatsby';
import "./styles.css"

const MenuContainer = ({ openMenu }) => (
    <ul className={`menu-container ${openMenu ? 'open-menu' : ''}`}>
        <li className="menu-item"><Link to="/portfolio">portfólio</Link></li>
        <li className="menu-item">online</li>
        <li className="menu-item">lab</li>
        <li className="menu-item">nós</li>
        <li className="menu-item">mídia</li>
        <li className="menu-item">contato</li>
    </ul>
);

export default MenuContainer