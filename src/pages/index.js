import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import Banner from "../components/banner/banner"
import ImageContent from "../components/image-content/image-content"
import Button from "../components/button/button"

export const query = graphql`
  query MyQuery {
    allMarkdownRemark(filter: { fields: { slug: { eq: "/home/home/" } } }) {
      edges {
        node {
          rawMarkdownBody
          html
          frontmatter {
            banner {
              childImageSharp {
                original {
                  src
                }
              }
            }
            location_img {
              childImageSharp {
                original {
                  src
                }
              }
            }
            title
            introduction_title
            intro
            introduction_description
            location_title
            location_description
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const {
    introduction_title,
    introduction_description,
    banner,
    location_img,
    location_title,
    location_description,
    values,
  } = data.allMarkdownRemark.edges[0].node.frontmatter

  return (
    <Layout id="home">
      <SEO title="Home" />
      <Banner img={banner.childImageSharp.original.src} />
      <section id="home-intro" class="flex-center">
        <h1>{introduction_title}</h1>
        <p>{introduction_description}</p>
      </section>
      <ImageContent
        img={location_img.childImageSharp.original.src}
        imgType="square"
        bgColor="pink"
      >
        <h2>{location_title}</h2>
        <p>{location_description}</p>
        <Button
          type="button"
          path="/404/"
          bgColor="sand"
          text="See our studios"
        />
      </ImageContent>
    </Layout>
  )
}

export default IndexPage
