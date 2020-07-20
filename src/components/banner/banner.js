import React from "react"
import Header from "../header/header"
import "./banner.scss"

const Banner = ({ img, home = false }) => {
  return <div class="banner">{img ? <img src={img}></img> : null}</div>
}

export default Banner
