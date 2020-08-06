import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import Banner from "../components/banner/banner"
import { graphql } from "gatsby"

export const data = graphql`
  query AboutPage {
    staff: markdownRemark(fields: { slug: { regex: "/staff/" } }) {
      frontmatter {
        team {
          description
          name
          photo {
            childImageSharp {
              fluid {
                srcSet
              }
            }
          }
        }
      }
    }
    banner: markdownRemark(fields: { slug: { regex: "/banner/" } }) {
      frontmatter {
        about_banner_img {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const AboutPage = ({ data }) => {
  const { banner, staff } = data

  return (
    <Layout id="about">
      <SEO title="About" />
      <Banner
        fluid={banner.frontmatter.about_banner_img.childImageSharp.fluid}
        title="About"
      />
      <section id="studios">
        <h2>Studios</h2>
      </section>
    </Layout>
  )
}

export default AboutPage
