import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import Banner from "../components/banner/banner"

export const data = graphql`
  query TimetablePage {
    banner: markdownRemark(fields: { slug: { regex: "/banner/" } }) {
      frontmatter {
        timetable_banner_img {
          childImageSharp {
            fluid(quality: 90, maxHeight: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const Timetable = ({ data }) => {
  const { banner } = data
  return (
    <Layout>
      <SEO title="Timetable" />
      <Banner
        fluid={banner.frontmatter.timetable_banner_img.childImageSharp.fluid}
        title="Timetable"
      />
      <section id="timetable"></section>
    </Layout>
  )
}

export default Timetable
