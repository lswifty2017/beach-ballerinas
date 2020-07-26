import React, { useState } from "react"
import HeaderNavigation from "./header-nav/header-nav"
import CloseIcon from "../../assets/close-icon.svg"
import FacebookIcon from "../../assets/facebook.svg"
import HamburgerMenuIcon from "../../assets/hamburger-menu.svg"
import InstagramIcon from "../../assets/instagram.svg"
import BalletIcon from "../../assets/ballet.svg"
import { Transition } from "react-transition-group"
import "./header.scss"

const Header = ({ logo, pagePaths }) => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const duration = 300

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  }

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  }

  return (
    <header className="header">
      <div className="header__logo">
        <BalletIcon />
        Beach Ballerinas
      </div>
      <button
        className="header__mobile-toggle"
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <CloseIcon /> : <HamburgerMenuIcon />}
      </button>
      {navbarOpen ? <HeaderNavigation pagePaths={pagePaths} /> : null}
      {/* <Transition in={navbarOpen} timeout={500}>
        {state => <HeaderNavigation className={state} pagePaths={pagePaths} />}
      </Transition> */}
    </header>
  )
}

export default Header
