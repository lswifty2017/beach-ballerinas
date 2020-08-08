import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import Banner from "../components/banner/banner"
import { graphql } from "gatsby"
import ImageContent from "../components/image-content/image-content"

export const data = graphql`
  query AboutPage {
    staff: markdownRemark(fields: { slug: { regex: "/staff/" } }) {
      frontmatter {
        title
        team {
          description
          name
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
      <section id={staff.frontmatter.title}>
        <div className="section__wrapper">
          <h2>{staff.frontmatter.title}</h2>
          {staff.frontmatter.team.map(({ name, description, photo }) => {
            return (
              <ImageContent
                key={name}
                fluid={photo.childImageSharp.fluid}
                imgType="circle"
              >
                <div class="text-align-left">
                  <h3>{name}</h3>
                  <p dangerouslySetInnerHTML={{ __html: description }}></p>
                </div>
              </ImageContent>
            )
          })}
        </div>
      </section>
      <section id="studios">
        <h2>Studios</h2>
      </section>
    </Layout>
  )
}

export default AboutPage
