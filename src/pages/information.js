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
    </Layout>
  )
}

export default InformationPage
