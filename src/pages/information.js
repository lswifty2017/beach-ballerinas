import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import Banner from "../components/banner/banner"
import ReactMarkdown from "react-markdown"

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
    termsAndConditions: markdownRemark(
      fields: { slug: { regex: "/terms-and-conditions/" } }
    ) {
      frontmatter {
        title
        content
      }
    }
  }
`

const InformationPage = ({ data }) => {
  const { banner, termsAndConditions } = data

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
          <h2>{termsAndConditions.frontmatter.title}</h2>
          <ReactMarkdown source={termsAndConditions.frontmatter.content} />
        </div>
      </section>
    </Layout>
  )
}

export default InformationPage
