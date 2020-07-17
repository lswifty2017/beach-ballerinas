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
  return (
    <Layout>
      <SEO title="Home" />
    </Layout>
  )
}

export default IndexPage
