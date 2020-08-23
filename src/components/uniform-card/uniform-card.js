import React from "react"
import Img from "gatsby-image"
import ReactMarkdown from "react-markdown"
import "./uniform-card.scss"

const UniformCard = ({ title, description, imgFluid }) => {
  return (
    <div className="uniform-card">
      <div className="uniform-card__image">
        <Img
          fluid={imgFluid}
          objectFit="cover"
          style={{ maxHeight: "100%", maxWidth: "100%" }}
          objectPosition="50% 50%"
        ></Img>
      </div>
      <div className="uniform-card__wrapper">
        <h3>{title}</h3>
        <ReactMarkdown source={description} />
      </div>
    </div>
  )
}

export default UniformCard
