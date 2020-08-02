import React from "react"
import { Link } from "gatsby"
import "./header-nav.scss"

const HeaderNav = ({ navLinks = [], socialLinks = [] }) => {
  const navigationLinksJSX = navLinks.map(
    ({ primaryTitle, primaryPath, secondaryLinks }) => {
      return (
        <li key={primaryTitle} className="header-nav__link">
          <Link
            to={primaryPath}
            onClick={() => {
              // Prevent no scroll being added to body on redirect
              document.body.classList.remove("noscroll")
            }}
          >
            {primaryTitle}
          </Link>
          {secondaryLinks.length ? (
            <ul className="header-nav__links-secondary">
              {secondaryLinks.map(({ secondaryTitle, secondaryPath }) => {
                return (
                  <li
                    key={secondaryTitle}
                    className="header-nav__link-secondary"
                  >
                    <Link to={secondaryPath}>{secondaryTitle}</Link>
                  </li>
                )
              })}
            </ul>
          ) : null}
        </li>
      )
    }
  )

  return (
    <nav className="header-nav">
      <ul className="header-nav__links">{navigationLinksJSX}</ul>
      <div className="header-nav__social">
        {socialLinks.map(({ link, icon }) => {
          return (
            <a key={link} href={link} target="_blank" rel="noreferrer">
              {icon}
            </a>
          )
        })}
      </div>
    </nav>
  )
}

export default HeaderNav
