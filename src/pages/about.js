import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import Banner from "../components/banner/banner"

const AboutPage = ({ data }) => {
  return (
    <Layout id="home">
      <SEO title="Home" />
      <Banner />
      <section id="studios">
        <h1>Studios</h1>
      </section>
    </Layout>
  )
}

export default AboutPage
