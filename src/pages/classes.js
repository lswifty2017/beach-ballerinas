import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import Banner from "../components/banner/banner"
import ImageContent from "../components/image-content/image-content"

export const data = graphql`
  query ClassesPage {
    banner: markdownRemark(fields: { slug: { regex: "/banner/" } }) {
      frontmatter {
        classes_banner_img {
          childImageSharp {
            fluid(quality: 90, maxHeight: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    classes: allMarkdownRemark(
      filter: { fields: { slug: { regex: "/classes/" } } }
    ) {
      nodes {
        frontmatter {
          title
          subtitle
          description
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

const Classes = ({ data }) => {
  const { banner, classes } = data

  return (
    <Layout>
      <SEO title="Classes" />
      <Banner
        fluid={banner.frontmatter.classes_banner_img.childImageSharp.fluid}
        title="Classes"
      />
      <section id="classes">
        <div className="section__wrapper section__wrapper--content">
          {classes.nodes.map(({ frontmatter }) => {
            return (
              <ImageContent
                fluid={frontmatter.image.childImageSharp.fluid}
                imgType="square"
              >
                <h3>{frontmatter.title}</h3>
              </ImageContent>
            )
          })}
        </div>
      </section>
    </Layout>
  )
}

export default Classes
