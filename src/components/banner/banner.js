import React from "react"
import Img from "gatsby-image"
import "./banner.scss"

const Banner = ({ fluid, gradient = true, title }) => {
  return (
    <div className="banner">
      <h1 className="banner__title">{title}</h1>
      <Img
        className={
          gradient ? "banner__image" : "banner__image banner__image--plain"
        }
        fluid={fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        style={{ maxHeight: "100%", maxWidth: "100%" }}
      ></Img>
    </div>
  )
}

export default Banner
