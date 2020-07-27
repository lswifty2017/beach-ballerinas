import React from "react"
import { Link } from "gatsby"
import kebabCaseFn from "../../../utils/kebab-case"
import FacebookIcon from "../../../assets/facebook.svg"
import InstagramIcon from "../../../assets/instagram.svg"
import "./header-nav.scss"

const HeaderNav = ({ navLinks = {} }) => {
  return (
    <nav className="header-nav">
      <ul className="header-nav__links">
        <li className="header-nav__link">
          <Link to={`/about/`}>About</Link>
          <ul className="header-nav__links-secondary">
            {navLinks.about.map(link => {
              return (
                <li className="header-nav__link-secondary">
                  <Link to={`/about#${kebabCaseFn(link)}`}>{link}</Link>
                </li>
              )
            })}
          </ul>
        </li>
        <li className="header-nav__link">
          <Link to={`/classes/`}>Classes</Link>
        </li>
        <li className="header-nav__link">
          <Link to={`/timetable/`}>Timetable</Link>
        </li>
        <li className="header-nav__link">
          <Link to={`/information/`}>Information</Link>
        </li>
        <li className="header-nav__link">
          <Link to={`/contact/`}>Contact</Link>
        </li>
        <li className="header-nav__link">
          <Link to={`/signup/`}>Sign Up</Link>
        </li>
      </ul>
      <div className="header-nav__social">
        <a
          href="https://www.instagram.com/beach_ballerinas"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon />
        </a>
        <a
          href="https://www.facebook.com/Beach-Ballerinas-113132270490904/"
          target="_blank"
          rel="noreferrer"
        >
          <FacebookIcon />
        </a>
      </div>
    </nav>
  )
}

export default HeaderNav
