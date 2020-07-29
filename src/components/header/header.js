import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import HeaderNavigation from "./header-nav/header-nav"
import CloseIcon from "../../assets/close-icon.svg"
import HamburgerMenuIcon from "../../assets/hamburger-menu.svg"
import BalletIcon from "../../assets/ballet.svg"
import useWindowDimensions from "../../utils/window-dimensions"
import "./header.scss"

const Header = ({ logo }) => {
  const { width } = useWindowDimensions()
  const [navbarOpen, setNavbarOpen] = useState(false)
  const tabletWidth = 1172

  useEffect(() => {
    if (width > tabletWidth) {
      setNavbarOpen(true)
    }
  })

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
      classes: allMarkdownRemark(
        filter: { fields: { slug: { regex: "/classes/" } } }
      ) {
        edges {
          node {
            frontmatter {
              title
              subtitle
              description
              image {
                childImageSharp {
                  fixed(width: 180, height: 180) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
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

  // Get title from each subquery and push into navlinks array

  allPages.forEach(page => {
    if (page in pageData) {
      pageData[page].edges.forEach(edge => {
        navLinks[page].push(edge.node.frontmatter.title)
      })
    }
  })

  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <BalletIcon />
        Beach Ballerinas
      </Link>
      {navbarOpen ? <HeaderNavigation navLinks={navLinks} /> : null}
      <button
        className="header__mobile-toggle"
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {width <= tabletWidth ? (
          navbarOpen ? (
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
