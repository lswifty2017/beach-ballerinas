import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import BBLogo from "../assets/bb-logo-black.png"

const SignUpPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Success" description="You have successfully signed up." />
      <section id="success">
        <div className="success">
          <img src={BBLogo} alt="beach ballerinas logo"></img>
          <h1>Success!</h1>
          <p>
            Thank you for expressing interest in Beach Ballerinas. We will be
            getting back to you shortly!
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default SignUpPage
