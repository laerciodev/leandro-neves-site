import React from 'react';
import { Link } from 'gatsby';
import MenuContainer from '../Menu/MenuContainer';
import './styles.css';


const Footer = () => (
    <>
        {/* <a className="btn-back" href="/">&lt; Voltar</a> */}
        <footer className="footer">
            <MenuContainer />
            <h3 className="social-media-title">Redes sociais</h3>
            <Link to="/contato" className="email-contact">contato@studioleandroneves.com</Link>
            <p className="copyright">leandroneves&copy;</p>
        </footer>
    </>
)


export default Footer;