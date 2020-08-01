import React from "react"
import Header from "../header/header"
import Footer from "../footer/footer"
import { useStaticQuery, graphql } from "gatsby"
import FacebookIcon from "../../assets/facebook.svg"
import InstagramIcon from "../../assets/instagram.svg"
import { noCase, paramCase } from "change-case"
import "./layout.scss"

const Layout = ({ children, id }) => {
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
    <>
      <Header socialLinks={socialLinks} navLinks={navLinks} />
      <main id={id}>{children}</main>
      <Footer socialLinks={socialLinks} footerLinks={navLinks} />
    </>
  )
}

export default Layout
