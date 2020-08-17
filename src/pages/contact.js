import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import Banner from "../components/banner/banner"
import Form from "../components/form/form"
import InstagramIcon from "../assets/svgs/instagram.svg"
import FacebookIcon from "../assets/svgs/facebook.svg"
import PhoneIcon from "../assets/svgs/phone-icon.svg"
import EmailIcon from "../assets/svgs/email-icon.svg"

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
          <div className="contact__address">
            <h3>Bondi Studio</h3>
            <p>126 Ramsgate Avenue</p>
            <p>North Bondi</p>
            <p>NSW 2026</p>
          </div>
          <div className="contact__information">
            <h3>Contact Details</h3>

            <p>
              <span>
                <PhoneIcon />
              </span>
              +61 426 357 948
            </p>
            <p>
              <span>
                <EmailIcon />
              </span>
              tamar@beachballerinas.com.au
            </p>
          </div>
          <h3>Follow Us</h3>
          <div className="contact__social">
            <a
              href="https://www.instagram.com/beach_ballerinas"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.facebook.com/Beach-Ballerinas-113132270490904/"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIcon />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage
