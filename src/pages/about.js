import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import Banner from "../components/banner/banner"
import { useStaticQuery, graphql } from "gatsby"
import GatsbyImage from "gatsby-image"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
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
      banner_img: markdownRemark {
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
  `)

  const { banner_img, staff } = data

  return (
    <Layout id="about">
      <SEO title="About" />
      <Banner
        fluid={banner_img.frontmatter.about_banner_img.childImageSharp.fluid}
        title="About"
      />
      <section id="studios">
        <h2>Studios</h2>
      </section>
    </Layout>
  )
}

export default AboutPage
