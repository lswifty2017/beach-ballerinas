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
    classes: allMarkdownRemark(
      filter: { fields: { slug: { regex: "/classes/" } } }
    ) {
      nodes {
        frontmatter {
          class_times {
            day
            start_time
            end_time
          }
        }
      }
    }
  }
`

const Timetable = ({ data }) => {
  const { banner, classes } = data
  const classTimes = [
    { day: "Monday" },
    { day: "Tuesday" },
    { day: "Wednesday" },
    { day: "Thursday" },
    { day: "Friday" },
    { day: "Saturday" },
    { day: "Sunday" },
  ]

  classes.nodes.forEach(({ frontmatter }) => {
    const { class_times } = frontmatter

    if (class_times) {
      class_times.forEach(classTime => {})
    }
  })

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
