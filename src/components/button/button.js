import React from "react"
import { Link } from "gatsby"
import "./button.scss"

const Button = ({
  path,
  bgColor,
  textSize = "default",
  text,
  formSubmit = false,
}) => {
  return (
    <div
      className={bgColor ? `button button--${bgColor}` : `button button--blue`}
    >
      {formSubmit ? (
        <button type="submit">{text}</button>
      ) : (
        <Link to={path}>{text}</Link>
      )}
    </div>
  )
}

export default Button
