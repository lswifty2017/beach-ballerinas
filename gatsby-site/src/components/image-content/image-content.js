import React from "react"
import Img from "gatsby-image"
import "./image-content.scss"

const ImageContent = ({ fluid, imgType = "", bgColor, children, id }) => {
  let imageClassName = "image-content__image"
  let containerClassName = "image-content"

  if (imgType === "circle") {
    imageClassName += " image-content__image--circle"
  }

  if (imgType === "square") {
    imageClassName += " image-content__image--square"
  }

  if (imgType === "rectangle") {
    imageClassName += " image-content__image--rectangle"
  }

  if (imgType) {
    containerClassName += " image-content--padded-bottom"
  }

  if (bgColor === "pink") {
    containerClassName += " image-content--pink"
  }

  return (
    <div id={id} className={containerClassName}>
      <div className={imageClassName}>
        <Img
          fluid={fluid}
          objectFit="cover"
          objectPosition="50% 50%"
          style={{ maxHeight: "100%", maxWidth: "100%" }}
        />
      </div>
      <div className="image-content__content">
        <div className="image-content__content__wrapper">{children}</div>
      </div>
    </div>
  )
}

export default ImageContent
