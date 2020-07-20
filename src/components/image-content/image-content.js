import React from "react"
import "./image-content.scss"

const ImageContent = ({ img, imgType = "square", bgColor, children }) => (
  <div className="image-content">
    <div
      className={
        imgType === "square"
          ? "image-content__image"
          : "image-content__image image-content__image--circle"
      }
    >
      <img src={img} />
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
