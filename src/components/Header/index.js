import React from "react"
import { Link } from "gatsby"
import Menu from "../Menu"
import "./styles.css"
import Logo from "../../static/assets/img/svg/logo.inline.svg"

const Header = () => (
  <header className="header">
    <Link className="link-home" to="/">
      <Logo className="logo-header" />
    </Link>
    <Menu />
  </header>
)

export default Header
