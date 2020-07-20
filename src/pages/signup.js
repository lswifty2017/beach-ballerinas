import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import Banner from "../components/banner/banner"

const SignUpPage = ({ data }) => {
  return (
    <Layout id="home">
      <SEO title="Home" />
      <Banner />
      <section>
        <h1>Sign Up</h1>
      </section>
    </Layout>
  )
}

export default SignUpPage
