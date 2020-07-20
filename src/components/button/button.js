import React from "react"
import { Link } from "gatsby"
import "./button.scss"

const Button = ({
  type = "button",
  path,
  bgColor,
  textSize = "default",
  text,
}) => {
  if (type === "button") {
    return (
      <div
        className={
          bgColor ? `button button--${bgColor}` : `button button--blue`
        }
      >
        <Link to={path}>{text}</Link>
      </div>
    )
  }
}

export default Button
