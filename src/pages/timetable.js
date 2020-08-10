import React from "react"
import { paramCase } from "change-case"
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
          title
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

  const classTabletable = [
    { day: "Monday", classes: [] },
    { day: "Tuesday", classes: [] },
    { day: "Wednesday", classes: [] },
    { day: "Thursday", classes: [] },
    { day: "Friday", classes: [] },
    { day: "Saturday", classes: [] },
    { day: "Sunday", classes: [] },
  ]

  classes.nodes.forEach(({ frontmatter }) => {
    const { class_times, title } = frontmatter

    if (class_times) {
      class_times.forEach(({ day, start_time, end_time }) => {
        const classTimeData = {
          title: title,
          startTime: start_time,
          endTime: end_time,
        }

        switch (day) {
          case "Monday":
            classTabletable[0].classes.push(classTimeData)
            break
          case "Tuesday":
            classTabletable[1].classes.push(classTimeData)
            break
          case "Wednesday":
            classTabletable[2].classes.push(classTimeData)
            break
          case "Thursday":
            classTabletable[3].classes.push(classTimeData)
            break
          case "Friday":
            classTabletable[4].classes.push(classTimeData)
            break
          case "Saturday":
            classTabletable[5].classes.push(classTimeData)
            break
          case "Sunday":
            classTabletable[6].classes.push(classTimeData)
            break
        }
      })
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
