import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import Banner from "../components/banner/banner"
import { useStaticQuery, graphql } from "gatsby"
import GatsbyImage from "gatsby-image"

// export const query = useStaticQuery(graphql`
//   query MyQuery {
//     staff: markdownRemark(fields: { slug: { regex: "/staff/" } }) {
//       frontmatter {
//         team {
//           description
//           name
//           photo {
//             childImageSharp {
//               fluid {
//                 srcSet
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `)

const AboutPage = ({ data }) => {
  return (
    <Layout id="home">
      <SEO title="Home" />
      <Banner />
      <section id="studios">
        <h1>Studios</h1>
      </section>
    </Layout>
  )
}

export default AboutPage
