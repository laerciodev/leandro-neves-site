import React from 'react';
import MenuContainer from '../Menu/MenuContainer';
import './styles.css';


const Footer = () => (
    <>
        <a className="btn-back" href="/">Voltar</a>
        <footer className="footer">
            <MenuContainer />
            <h3 className="social-media-title">Redes sociais</h3>
            <a className="email-contact">contato@studioleandroneves.com</a>
            <p className="copyright">leandroneves&copy;</p>
        </footer>
    </>
)


export default Footer;