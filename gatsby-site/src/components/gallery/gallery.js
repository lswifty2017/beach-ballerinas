import React from "react"
import "./gallery.scss"

const Gallery = ({ children }) => {
  return (
    <div className="gallery">
      {children.map((child, i) => {
        return (
          <div key={i} className="gallery__item">
            {child}
          </div>
        )
      })}
    </div>
  )
}

export default Gallery
