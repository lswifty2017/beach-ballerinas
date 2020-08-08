import React from "react"
import Img from "gatsby-image"
import "./image-content.scss"

const ImageContent = ({ fluid, imgType = "", bgColor, children }) => (
  <div className="image-content">
    <div
      className={
        imgType === "circle"
          ? "image-content__image image-content__image--circle"
          : "image-content__image"
      }
    >
      <Img
        fluid={fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        style={{ maxHeight: "100%", maxWidth: "100%" }}
      />
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
