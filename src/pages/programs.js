import React from "react"
import { graphql } from "gatsby"
import { paramCase } from "change-case"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import Banner from "../components/banner/banner"
import ImageContent from "../components/image-content/image-content"
import ReactMarkdown from "react-markdown"
import Button from "../components/button/button"

export const data = graphql`
  query ProgramsPage {
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
    programs: allMarkdownRemark(
      sort: { fields: frontmatter___order, order: ASC }
      filter: { fields: { slug: { regex: "/programs/" } } }
    ) {
      nodes {
        frontmatter {
          title
          location
          description
          payment_link
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

const Programs = ({ data }) => {
  const { banner, programs } = data

  return (
    <Layout>
      <SEO title="Programs" />
      <Banner
        fluid={banner.frontmatter.information_banner_img.childImageSharp.fluid}
        title="Programs"
      />
      <section id="programs">
        <div className="section__wrapper">
          {programs.nodes.map(({ frontmatter }) => {
            return (
              <ImageContent
                id={paramCase(frontmatter.title)}
                fluid={frontmatter.image.childImageSharp.fluid}
                imgType="rectangle"
                key={frontmatter.title}
              >
                <h3>{frontmatter.title}</h3>
                <h4>{frontmatter.location}</h4>
                <ReactMarkdown children={frontmatter.description} />
                <div className="flex-container">
                  <Button
                    path={frontmatter.payment_link}
                    text="Book now"
                    target="_blank"
                  />
                </div>
              </ImageContent>
            )
          })}
        </div>
      </section>
    </Layout>
  )
}

export default Programs
