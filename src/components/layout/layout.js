import React from "react"
import Header from "../header/header"
import "./layout.scss"

const Layout = ({ children, id }) => {
  return (
    <>
      <Header />
      <main id={id}>{children}</main>
    </>
  )
}

export default Layout
