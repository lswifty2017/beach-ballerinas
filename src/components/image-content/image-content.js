import React from "react"
import Img from "gatsby-image"
import "./image-content.scss"

const ImageContent = ({ fluid, imgType = "", bgColor, children, id }) => {
  let imageClassName = "image-content__image"

  if (imgType === "circle") {
    imageClassName += " image-content__image--circle"
  }

  if (imgType === "square") {
    imageClassName += " image-content__image--square"
  }

  return (
    <div
      id={id}
      className={
        imgType ? "image-content image-content--padded-bottom" : "image-content"
      }
    >
      <div className={imageClassName}>
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
}

export default ImageContent
