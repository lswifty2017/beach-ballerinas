import React from "react"
import Button from "../button/button"
import Img from "gatsby-image"
import "./class-card.scss"

const ClassCard = ({ fluid, alt, title, subtitle, path }) => (
  <div className="class-card">
    <div className="class-card__image">
      <Img
        fluid={fluid}
        objectFit="cover"
        style={{ maxHeight: "100%", maxWidth: "100%" }}
        objectPosition="50% 50%"
      />
    </div>
    <div className="class-card__title">{title}</div>
    <div className="class-card__subtitle">{subtitle}</div>
    <Button bgColor="sand" path={path} text="Class Info" />
  </div>
)

export default ClassCard
