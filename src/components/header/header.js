import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import HeaderNavigation from "./header-nav/header-nav"
import CloseIcon from "../../assets/close-icon.svg"
import FacebookIcon from "../../assets/facebook.svg"
import HamburgerMenuIcon from "../../assets/hamburger-menu.svg"
import InstagramIcon from "../../assets/instagram.svg"
import BalletIcon from "../../assets/ballet.svg"
import "./header.scss"

const Header = ({ logo }) => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const pageData = useStaticQuery(graphql`
    query AboutQuery {
      about: allMarkdownRemark(
        filter: { fields: { slug: { regex: "/about/" } } }
      ) {
        edges {
          node {
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  const navLinks = {
    about: [],
    classes: [],
  }

  const allPages = Object.keys(navLinks)

  allPages.forEach(page => {
    if (page in pageData) {
      pageData[page].edges.forEach(edge => {
        navLinks[page].push(edge.node.frontmatter.title)
      })
    }
  })

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
      {navbarOpen ? <HeaderNavigation navLinks={navLinks} /> : null}
    </header>
  )
}

export default Header
