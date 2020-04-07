import React from "react"
import Menu from "../Menu"
import "./styles.css"
import Logo from '../../static/assets/img/svg/logo.inline.svg'

const Header = () => (
  <header className="header">
    <Logo />
    <Menu />
  </header>
)

export default Header
