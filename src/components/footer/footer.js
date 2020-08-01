import React from "react"
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
    </div>
  )
}

export default Footer
