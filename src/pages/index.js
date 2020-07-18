import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import Header from "../components/header/header"

export const query = graphql`
  query MyQuery {
    allMarkdownRemark(filter: { fields: { slug: { eq: "/home/home/" } } }) {
      edges {
        node {
          rawMarkdownBody
          html
          frontmatter {
            title
            introduction_title
            intro
            introduction_description
            banner
            location_img
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
    <Layout>
      <SEO title="Home" />
      <section id="home-banner">
        <img src={`${banner}`}></img>
      </section>
    </Layout>
  )
}

export default IndexPage
