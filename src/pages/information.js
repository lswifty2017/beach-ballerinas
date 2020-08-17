import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import Banner from "../components/banner/banner"

export const data = graphql`
  query InformationPage {
    banner: markdownRemark(fields: { slug: { regex: "/banner/" } }) {
      frontmatter {
        information_banner_img {
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

const InformationPage = ({ data }) => {
  const { banner } = data

  return (
    <Layout>
      <SEO title="Information" />
      <Banner
        fluid={banner.frontmatter.information_banner_img.childImageSharp.fluid}
        title="Information"
      />
      <section id="uniform">
        <h2>Uniform</h2>
      </section>
      <section id="terms-and-conditions" className="bgBlue">
        <div className="section__wrapper section__wrapper--content">
          <h2>Terms and Conditions</h2>
          <h4>
            Please read these Terms, our Privacy Policy and any other terms
            referenced in this document carefully. We hope you’re sitting
            comfortably and listening to some great music.
          </h4>
          <ol>
            <li>Changes to the agreements</li>
            <p>
              Occasionally we may make changes to the Agreements for valid
              reasons, such as improving the existing functions or features or
              adding new functions or features to the Service, implementing
              advancements in science and technology, and reasonable technical
              adjustments to the Service, ensuring the operability or the
              security of the Service, and for legal or regulatory reasons.
            </p>
            <ol>
              <li>Service Options</li>
              <p>
                Occasionally we may make changes to the Agreements for valid
                reasons, such as improving the existing functions or features or
                adding new functions or features to the Service, implementing
                advancements in science and technology, and reasonable technical
                adjustments to the Service, ensuring the operability or the
                security of the Service, and for legal or regulatory reasons.
              </p>
            </ol>
            <li>Payments and Cancellations</li>
          </ol>
        </div>
      </section>
    </Layout>
  )
}

export default InformationPage
