import React from "react"
import Button from "../button/button"
import Img from "gatsby-image"
import "./class-card.scss"

const ClassCard = ({ fixed, alt, title, subtitle, path }) => (
  <div className="class-card">
    <div className="class-card__image">
      <Img fixed={fixed} />
    </div>
    <div className="class-card__title">{title}</div>
    <div className="class-card__subtitle">{subtitle}</div>
    <Button bgColor="sand" path={path} text="Learn More" />
  </div>
)

export default ClassCard
