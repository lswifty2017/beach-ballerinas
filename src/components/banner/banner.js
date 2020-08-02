import React from "react"
import Img from "gatsby-image"
import "./banner.scss"

const Banner = ({ fluid, home = false }) => {
  return (
    <div className="banner">
      {fluid ? (
        <Img fluid={fluid} objectFit="cover" objectPosition="50% 50%"></Img>
      ) : null}
    </div>
  )
}

export default Banner
