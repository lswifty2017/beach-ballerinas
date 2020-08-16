import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import Banner from "../components/banner/banner"
import Form from "../components/form/form"

export const data = graphql`
  query ContactPage {
    banner: markdownRemark(fields: { slug: { regex: "/banner/" } }) {
      frontmatter {
        contact_banner_img {
          childImageSharp {
            fluid(quality: 90, maxHeight: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const ContactPage = ({ data }) => {
  const { banner } = data

  const formFields = [
    { type: "text", label: "Name", required: true },
    { type: "text", label: "Email", required: true },
    { type: "text", label: "Phone Number", required: true },
    { type: "textarea", label: "Message", required: true },
  ]

  return (
    <Layout>
      <SEO title="Contact" />
      <Banner
        fluid={banner.frontmatter.contact_banner_img.childImageSharp.fluid}
        title="Contact"
      />
      <section className="contact">
        <div className="contact__form">
          <h2>Get in Touch</h2>
          <Form formFields={formFields} />
        </div>
        <div className="contact__details">
          <h4>Bondi Studio</h4>
          <p>126 Ramsgate Avenue</p>
          <p>North Bondi</p>
          <p>NSW 2026</p>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage
