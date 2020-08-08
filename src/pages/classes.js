import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import Banner from "../components/banner/banner"

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
    values: markdownRemark(
      fields: { slug: { regex: "/attitude-ettiquette/" } }
    ) {
      frontmatter {
        title
        description
        values {
          value
        }
      }
    }
    studios: markdownRemark(fields: { slug: { regex: "/studios/" } }) {
      frontmatter {
        title
        studio {
          title
          address
          description
          photo {
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
  const { banner } = data

  return (
    <Layout>
      <SEO title="Classes" />
      <Banner
        fluid={banner.frontmatter.classes_banner_img.childImageSharp.fluid}
        title="Classes"
      />
      <section>
        <h2>Classes</h2>
      </section>
    </Layout>
  )
}

export default Classes
