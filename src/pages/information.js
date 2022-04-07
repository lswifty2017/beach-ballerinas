import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import Banner from "../components/banner/banner"
import ReactMarkdown from "react-markdown"
import { paramCase } from "change-case"
import Gallery from "../components/gallery/gallery"
import UniformCard from "../components/uniform-card/uniform-card"
import BlochLogo from "../assets/bloch-logo.jpg"

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
    uniform: markdownRemark(fields: { slug: { regex: "/uniform/" } }) {
      frontmatter {
        title
        description
        uniform_card {
          description
          title
          photo {
            childImageSharp {
              fluid(quality: 90, maxHeight: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

const InformationPage = ({ data }) => {
  const { banner, termsAndConditions, uniform } = data

  return (
    <Layout>
      <SEO title="Information" />
      <Banner
        fluid={banner.frontmatter.information_banner_img.childImageSharp.fluid}
        title="Information"
      />
      <section id="uniform">
        <div className="section__wrapper">
          <h2>{uniform.frontmatter.title}</h2>
          <div className="section__wrapper section__wrapper--content text-align-center">
            <ReactMarkdown children={uniform.frontmatter.description} />
            <a
              aria-label="link to bloch page"
              class="bloch-logo"
              href="https://www.bloch.com.au/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={BlochLogo} alt="bloch-logo"></img>
            </a>
          </div>
          <Gallery>
            {uniform.frontmatter.uniform_card.map(
              ({ title, description, photo }) => {
                return (
                  <UniformCard
                    key={title}
                    title={title}
                    description={description}
                    imgFluid={photo.childImageSharp.fluid}
                  />
                )
              }
            )}
          </Gallery>
        </div>
      </section>
      <section
        id={paramCase(termsAndConditions.frontmatter.title)}
        className="bgBlue"
      >
        <div className="section__wrapper section__wrapper--content">
          <h2>{termsAndConditions.frontmatter.title}</h2>
          <ReactMarkdown children={termsAndConditions.frontmatter.content} />
        </div>
      </section>
    </Layout>
  )
}

export default InformationPage
