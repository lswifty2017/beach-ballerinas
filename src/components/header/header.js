import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { noCase, paramCase } from "change-case"
import HeaderNavigation from "./header-nav/header-nav"
import CloseIcon from "../../assets/close-icon.svg"
import HamburgerMenuIcon from "../../assets/hamburger-menu.svg"
import BalletIcon from "../../assets/ballet.svg"
import useWindowDimensions from "../../utils/window-dimensions"
import FacebookIcon from "../../assets/facebook.svg"
import InstagramIcon from "../../assets/instagram.svg"

import "./header.scss"

const Header = () => {
  const { width } = useWindowDimensions()
  const [navbarState, setNavbarState] = useState(false)
  const tabletWidth = 1172

  useEffect(() => {
    if (width > tabletWidth) {
      setNavbarState(true)
    }
  }, [width])

  const toggleNav = () => {
    setNavbarState(!navbarState)

    if (!navbarState) {
      document.body.classList.add("noscroll")
    } else {
      document.body.classList.remove("noscroll")
    }
  }

  const navLinks = [
    { primaryTitle: "about", primaryPath: "/about", secondaryLinks: [] },
    { primaryTitle: "classes", primaryPath: "/classes", secondaryLinks: [] },
    {
      primaryTitle: "timetable",
      primaryPath: "/timetable",
      secondaryLinks: [],
    },
    {
      primaryTitle: "information",
      primaryPath: "/information",
      secondaryLinks: [],
    },
    { primaryTitle: "contact", primaryPath: "/contact", secondaryLinks: [] },
    { primaryTitle: "sign_up", primaryPath: "/sign-up", secondaryLinks: [] },
  ]

  const socialLinks = [
    {
      link: "https://www.instagram.com/beach_ballerinas",
      icon: <InstagramIcon />,
    },
    {
      link: "https://www.facebook.com/Beach-Ballerinas-113132270490904/",
      icon: <FacebookIcon />,
    },
  ]

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

  navLinks.forEach(({ primaryTitle, primaryPath, secondaryLinks }) => {
    if (pageData[primaryTitle]) {
      pageData[primaryTitle].edges.forEach(({ node }) => {
        secondaryLinks.push({
          secondaryTitle: noCase(node.frontmatter.title),
          secondaryPath: `${primaryPath}#${paramCase(node.frontmatter.title)}`,
        })
      })
    }
  })

  navLinks.map(link => {
    return (link.primaryTitle = noCase(link.primaryTitle))
  })

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
