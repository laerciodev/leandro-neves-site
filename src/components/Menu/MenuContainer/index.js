import React from "react";
import { Link } from 'gatsby';
import "./styles.css"

const MenuContainer = () => (
    <ul className={`menu-container`}>
        <li className="menu-item"><Link to="/portfolio" className="link" title="portfólio">portfólio</Link></li>
        <li className="menu-item">online</li>
        <li className="menu-item">lab</li>
        <li className="menu-item"><Link to="/nos" className="link" title="nós">nós</Link></li>
        <li className="menu-item">mídia</li>
        <li className="menu-item">contato</li>
    </ul>
);

export default MenuContainer