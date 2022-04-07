import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section id="404" description="Page is not found.">
      <div className="section__wrapper text-align-center">
        <h1>PAGE NOT FOUND</h1>
        <p>Sorry this page doesn't exist.</p>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
