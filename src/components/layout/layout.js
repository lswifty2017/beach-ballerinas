import React from "react"
import Header from "../header/header"
import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout
