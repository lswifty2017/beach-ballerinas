import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import Banner from "../components/banner/banner"
import { graphql } from "gatsby"
import { paramCase } from "change-case"
import ImageContent from "../components/image-content/image-content"
import ReactMarkdown from "react-markdown"

export const data = graphql`
  query AboutPage {
    staff: markdownRemark(fields: { slug: { regex: "/staff/" } }) {
      frontmatter {
        title
        team {
          name
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

const AboutPage = ({ data }) => {
  const { banner, staff, values, studios } = data

  return (
    <Layout id="about">
      <SEO title="About" />
      <Banner
        fluid={banner.frontmatter.about_banner_img.childImageSharp.fluid}
        title="About"
      />
      <section id={paramCase(staff.frontmatter.title)}>
        <div className="section__wrapper section__wrapper--content">
          <h2>{staff.frontmatter.title}</h2>
          {staff.frontmatter.team.map(({ name, description, photo }) => {
            return (
              <ImageContent
                key={name}
                fluid={photo.childImageSharp.fluid}
                imgType="circle"
              >
                <h3>{name}</h3>
                <ReactMarkdown source={description} />
              </ImageContent>
            )
          })}
        </div>
      </section>
      <section id={paramCase(values.frontmatter.title)} className="bgBlue">
        <div className="section__wrapper section__wrapper--content text-align-center">
          <h2>{values.frontmatter.title}</h2>
          <p>{values.frontmatter.description}</p>
          <ul>
            {values.frontmatter.values.map(({ value }) => {
              return <li key={value}>{value}</li>
            })}
          </ul>
        </div>
      </section>
      <section id={paramCase(studios.frontmatter.title)} className="bgPink">
        <div className="section__wrapper section__wrapper--content">
          <h2>{studios.frontmatter.title}</h2>
          {studios.frontmatter.studio.map(
            ({ title, address, description, photo }) => {
              return (
                <ImageContent
                  key={title}
                  fluid={photo.childImageSharp.fluid}
                  imgType="square"
                >
                  <div className="content">
                    <h3>{title}</h3>
                    <h4>{address}</h4>
                    <ReactMarkdown source={description} />
                  </div>
                </ImageContent>
              )
            }
          )}
        </div>
      </section>
    </Layout>
  )
}

export default AboutPage
