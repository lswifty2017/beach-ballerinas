import React from "react"
import { graphql } from "gatsby"
import moment from "moment"
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
    termDates: markdownRemark(fields: { slug: { regex: "/term-dates/" } }) {
      frontmatter {
        term_one {
          end_date
          start_date
        }
        term_three {
          end_date
          start_date
        }
        term_four {
          start_date
          end_date
        }
        term_two {
          end_date
          start_date
        }
      }
    }
  }
`

const Timetable = ({ data }) => {
  const { banner, classes, termDates } = data

  const classTimetable = [
    { day: "Monday", classes: [] },
    { day: "Tuesday", classes: [] },
    { day: "Wednesday", classes: [] },
    { day: "Thursday", classes: [] },
    { day: "Friday", classes: [] },
    { day: "Saturday", classes: [] },
    { day: "Sunday", classes: [] },
  ]

  const termOne = termDates.frontmatter.term_one[0]
  const termTwo = termDates.frontmatter.term_two[0]
  const termThree = termDates.frontmatter.term_three[0]
  const termFour = termDates.frontmatter.term_four[0]

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
            classTimetable[0].classes.sort(
              (a, b) =>
                moment(a.startTime, "HH:mm a") - moment(b.startTime, "HH:mm a")
            )
            break
          case "Tuesday":
            classTimetable[1].classes.push(classTimeData)
            classTimetable[1].classes.sort(
              (a, b) =>
                moment(a.startTime, "HH:mm a") - moment(b.startTime, "HH:mm a")
            )
            break
          case "Wednesday":
            classTimetable[2].classes.push(classTimeData)
            classTimetable[2].classes.sort(
              (a, b) =>
                moment(a.startTime, "HH:mm a") - moment(b.startTime, "HH:mm a")
            )
            break
          case "Thursday":
            classTimetable[3].classes.push(classTimeData)
            classTimetable[3].classes.sort(
              (a, b) =>
                moment(a.startTime, "HH:mm a") - moment(b.startTime, "HH:mm a")
            )
            break
          case "Friday":
            classTimetable[4].classes.push(classTimeData)
            classTimetable[4].classes.sort(
              (a, b) =>
                moment(a.startTime, "HH:mm a") - moment(b.startTime, "HH:mm a")
            )
            break
          case "Saturday":
            classTimetable[5].classes.push(classTimeData)
            classTimetable[5].classes.sort(
              (a, b) =>
                moment(a.startTime, "HH:mm a") - moment(b.startTime, "HH:mm a")
            )
            break
          case "Sunday":
            classTimetable[6].classes.push(classTimeData)
            classTimetable[6].classes.sort(
              (a, b) =>
                moment(a.startTime, "HH:mm a") - moment(b.startTime, "HH:mm a")
            )
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
                          <div key={title} className="timetable__class-time">
                            <h4 className="timetable__class-title">{title}</h4>
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
            <p>
              {termOne.start_date} - {termOne.end_date}
            </p>
            <div className="term-dates__term-title">Term Two</div>
            <p>
              {termTwo.start_date} - {termTwo.end_date}
            </p>
            <div className="term-dates__term-title">Term Three</div>
            <p>
              {termThree.start_date} - {termThree.end_date}
            </p>
            <div className="term-dates__term-title">Term Four</div>
            <p>
              {termFour.start_date} - {termFour.end_date}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Timetable
