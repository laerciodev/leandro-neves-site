import React from "react"
import { Link } from "gatsby"
import MenuContainer from "../Menu/MenuContainer"
import ContainerSocialMedia from "./ContainerSocialMedia"
import "./styles.css"

const Footer = () => {
  const url = typeof window !== "undefined" ? window.location.pathname : ""

  return (
    <>
      {url !== "/" ? (
        <Link to="/" className="btn-back">
          &lt; Voltar
        </Link>
      ) : null}
      <footer className="footer">
        <MenuContainer />
        <h3 className="social-media-title">Redes sociais</h3>
        <ContainerSocialMedia />
        <Link to="/contato" className="email-contact">
          contato@studioleandroneves.com
        </Link>
        <p className="copyright">leandroneves&copy;</p>
      </footer>
    </>
  )
}

export default Footer
