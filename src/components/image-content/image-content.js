import React from "react"
import Img from "gatsby-image"
import "./image-content.scss"

const ImageContent = ({ fluid, imgType = "square", bgColor, children }) => (
  <div className="image-content">
    <div
      className={
        imgType === "square"
          ? "image-content__image"
          : "image-content__image image-content__image--circle"
      }
    >
      <Img fluid={fluid} objectFit="contain" style={{ maxHeight: "100%" }} />
    </div>
    <div
      className={
        bgColor
          ? `image-content__content image-content__content--${bgColor}`
          : "image-content__content"
      }
    >
      <div className="image-content__content__wrapper">{children}</div>
    </div>
  </div>
)

export default ImageContent
