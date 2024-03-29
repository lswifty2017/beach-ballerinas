import React from "react"
import { Link } from "gatsby"
import "./button.scss"

const Button = ({
  path,
  bgColor,
  textSize = "default",
  text,
  formSubmit = false,
  target,
}) => {
  return (
    <div
      className={bgColor ? `button button--${bgColor}` : `button button--blue`}
    >
      {formSubmit ? (
        <button type="submit" aria-label="submit form">
          {text}
        </button>
      ) : (
        <Link to={path} target={target} aria-label={`link to ${path}`}>
          {text}
        </Link>
      )}
    </div>
  )
}

export default Button
