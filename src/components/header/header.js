import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import HeaderNavigation from "./header-nav/header-nav"
import CloseIcon from "../../assets/close-icon.svg"
import HamburgerMenuIcon from "../../assets/hamburger-menu.svg"
import BalletIcon from "../../assets/ballet.svg"
import useWindowDimensions from "../../utils/window-dimensions"

import "./header.scss"

const Header = ({ socialLinks, navLinks }) => {
  const { width } = useWindowDimensions()
  const [navbarState, setNavbarState] = useState(false)
  const tabletWidth = 1172

  useEffect(() => {
    width > tabletWidth ? setNavbarState(true) : setNavbarState(false)
  }, [width])

  const toggleNav = () => {
    setNavbarState(!navbarState)

    if (!navbarState) {
      document.body.classList.add("noscroll")
    } else {
      document.body.classList.remove("noscroll")
    }
  }

  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <BalletIcon />
        Beach Ballerinas
      </Link>
      {navbarState ? (
        <HeaderNavigation navLinks={navLinks} socialLinks={socialLinks} />
      ) : null}
      <button className="header__mobile-toggle" onClick={() => toggleNav()}>
        {width <= tabletWidth ? (
          navbarState ? (
            <CloseIcon />
          ) : (
            <HamburgerMenuIcon />
          )
        ) : null}
      </button>
    </header>
  )
}

export default Header
