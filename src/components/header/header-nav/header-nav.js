import React from "react"
import { Link } from "gatsby"
import "./header-nav.scss"

const HeaderNav = ({ pagePaths = [] }) => {
  return (
    <nav className="header-nav transition">
      <ul className="header-nav__links">
        {pagePaths.map(path => {
          return (
            <li className="header-nav__link">
              <Link to={`/${path}/`}>{path}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default HeaderNav
