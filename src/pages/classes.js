import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import Banner from "../components/banner/banner"
import ImageContent from "../components/image-content/image-content"
import { paramCase } from "change-case"
import ReactMarkdown from "react-markdown"
import Button from "../components/button/button"

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
        <div className="section__wrapper">
          {classes.nodes.map(({ frontmatter }) => {
            return (
              <ImageContent
                id={paramCase(frontmatter.title)}
                fluid={frontmatter.image.childImageSharp.fluid}
                imgType="square"
                key={frontmatter.title}
              >
                <h3>{frontmatter.title}</h3>
                <h4>{frontmatter.subtitle}</h4>
                <ReactMarkdown source={frontmatter.description} />
                <div className="flex-container">
                  <Button path={`/timetable`} text="View Timetable" />
                  <Button path={`/sign-up`} text="Sign Up" bgColor="sand" />
                </div>
              </ImageContent>
            )
          })}
        </div>
      </section>
    </Layout>
  )
}

export default Classes
