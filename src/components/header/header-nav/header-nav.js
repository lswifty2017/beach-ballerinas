import React from "react"
import { Link } from "gatsby"
import kebabCaseFn from "../../../utils/kebab-case"
import "./header-nav.scss"

const HeaderNav = ({ navLinks = {} }) => {
  return (
    <nav className="header-nav">
      <ul className="header-nav__links">
        {navLinks.about.map(link => {
          return (
            <li className="header-nav__link">
              <Link to={`about#${kebabCaseFn(link)}/`}>{link}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default HeaderNav
