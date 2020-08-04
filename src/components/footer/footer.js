import React from "react"
import { Link } from "gatsby"
import "./footer.scss"

const Footer = ({ socialLinks, footerLinks }) => {
  return (
    <div className="footer">
      <div className="footer__social">
        {socialLinks.map(({ link, icon }) => {
          return (
            <a key={link} href={link} target="_blank" rel="noreferrer">
              {icon}
            </a>
          )
        })}
      </div>
      <div className="footer__links">
        {footerLinks.map(({ primaryTitle, primaryPath, secondaryLinks }) => {
          return (
            <li key={primaryTitle} className="footer__link">
              <Link className="footer__link-primary" to={primaryPath}>
                {primaryTitle}
              </Link>
              {secondaryLinks.length ? (
                <ul className="footer__links-secondary">
                  {secondaryLinks.map(({ secondaryTitle, secondaryPath }) => {
                    return (
                      <li
                        key={secondaryTitle}
                        className="footer__link-secondary"
                      >
                        <Link to={secondaryPath}>{secondaryTitle}</Link>
                      </li>
                    )
                  })}
                </ul>
              ) : null}
            </li>
          )
        })}
      </div>
      <div className="footer__legal">
        &copy; {new Date().getFullYear()} Beach Ballerinas | Website designed
        and created by{" "}
        <span>
          <a
            href="mailto:l.swift94@gmail.com?subject=Web development enquiry "
            target="_blank"
            rel="noreferrer"
          >
            Liam Swift
          </a>
        </span>
      </div>
    </div>
  )
}

export default Footer
