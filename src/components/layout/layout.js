import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { noCase, paramCase } from "change-case"
import Header from "../header/header"
import Footer from "../footer/footer"
import FacebookIcon from "../../assets/svgs/facebook.svg"
import InstagramIcon from "../../assets/svgs/instagram.svg"
import NotificationBar from "../notification-bar/notification-bar"
import MessengerCustomerChat from "react-messenger-customer-chat"
import "./layout.scss"

const Layout = ({
  children,
  id,
  notificationBarConfig = { show: false, content: "" },
}) => {
  const pageData = useStaticQuery(graphql`
    query NavLinksQuery {
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
        sort: { fields: frontmatter___order, order: ASC }
        filter: { fields: { slug: { regex: "/classes/" } } }
      ) {
        edges {
          node {
            frontmatter {
              title
            }
          }
        }
      }
      information: allMarkdownRemark(
        filter: { fields: { slug: { regex: "/information/" } } }
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
      {notificationBarConfig.show ? (
        <NotificationBar content={notificationBarConfig.content} />
      ) : null}
      <main id={id}>{children}</main>
      <Footer socialLinks={socialLinks} footerLinks={navLinks} />
      <MessengerCustomerChat pageId="113132270490904" appId="113132270490904" />
      <div id="fb-root"></div>
      <div
        class="fb-customerchat"
        attribution="page_inbox"
        page_id="113132270490904"
      ></div>
    </>
  )
}

export default Layout
