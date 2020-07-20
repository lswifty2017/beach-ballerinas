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
      <div class={bgColor ? `button button--${bgColor}` : `button`}>
        <Link to={path}>{text}</Link>
      </div>
    )
  }
}

export default Button
