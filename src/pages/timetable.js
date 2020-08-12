import React from "react"
import { graphql } from "gatsby"
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

  const classTimetable = [
    { day: "Monday", classes: [] },
    { day: "Tuesday", classes: [] },
    { day: "Wednesday", classes: [] },
    { day: "Thursday", classes: [] },
    { day: "Friday", classes: [] },
    { day: "Saturday", classes: [] },
    { day: "Sunday", classes: [] },
  ]

  const termDates = {
    termOne: "Friday Jan 31 - Thur April 9",
    termTwo: "Friday Jan 31 - Thur April 9",
    termThree: "Friday Jan 31 - Thur April 9",
    termFour: "Friday Jan 31 - Thur April 9",
  }

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
            classTimetable[0].classes.push(classTimeData)
            break
          case "Tuesday":
            classTimetable[1].classes.push(classTimeData)
            break
          case "Wednesday":
            classTimetable[2].classes.push(classTimeData)
            break
          case "Thursday":
            classTimetable[3].classes.push(classTimeData)
            break
          case "Friday":
            classTimetable[4].classes.push(classTimeData)
            break
          case "Saturday":
            classTimetable[5].classes.push(classTimeData)
            break
          case "Sunday":
            classTimetable[6].classes.push(classTimeData)
            break
          default:
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
      <section id="timetable">
        <div className="section__wrapper flex-container flex-container--desktop-only">
          <div className="timetable">
            <h2>Class Times</h2>
            <div className="timetable__wrapper">
              {classTimetable.map(({ day, classes }) => {
                if (classes.length) {
                  return (
                    <div key={day} className="timetable__day">
                      <h3>{day}</h3>
                      {classes.map(({ title, startTime, endTime }) => {
                        return (
                          <div className="timetable__class-time">
                            <h4 class="timetable__class-title">{title}</h4>
                            <p>
                              {startTime} - {endTime}
                            </p>
                          </div>
                        )
                      })}
                    </div>
                  )
                }
              })}
            </div>
          </div>
          <div className="term-dates">
            <h3>Term Dates {new Date().getFullYear()}</h3>
            <div className="term-dates__term-title">Term One</div>
            <p>{termDates.termOne}</p>
            <div className="term-dates__term-title">Term Two</div>
            <p>{termDates.termTwo}</p>
            <div className="term-dates__term-title">Term Three</div>
            <p>{termDates.termThree}</p>
            <div className="term-dates__term-title">Term Four</div>
            <p>{termDates.termFour}</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Timetable
