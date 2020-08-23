import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import HeaderNavigation from "./header-nav/header-nav"
import CloseIcon from "../../assets/svgs/close-icon.svg"
import HamburgerMenuIcon from "../../assets/svgs/hamburger-menu.svg"
import useWindowDimensions from "../../utils/window-dimensions"
import bbLogo from "../../assets/bb-logo-black.png"
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
    <React.Fragment>
      <header className="header">
        <Link to="/" className="header__logo">
          <img src={bbLogo} alt="Beach Ballerinas Logo" />
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
    </React.Fragment>
  )
}

export default Header
