import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import Banner from "../components/banner/banner"
import ImageContent from "../components/image-content/image-content"
import Button from "../components/button/button"
import ClassCard from "../components/class-card/class-card"
import kebabCase from "../utils/kebab-case"
import TestimonialCarousel from "../components/testimonial-carousel/testimonial-carousel"
import "typeface-montserrat"

export const query = graphql`
  query MyQuery {
    allMarkdownRemark(filter: { fields: { slug: { eq: "/home/home/" } } }) {
      edges {
        node {
          frontmatter {
            banner {
              childImageSharp {
                fluid(maxHeight: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            location_title
            location_description
            location_img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            introduction_title
            introduction_description
            classes {
              class_description
              class_name
              class_img {
                childImageSharp {
                  fixed(width: 180, height: 180) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
            testimonials {
              testimonial_name
              testimonial_occupation
              testimonial_text
            }
            instagram_name
            instagram_links {
              embed_link
            }
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
    classes,
    testimonials,
    instagram_name,
    instagram_links,
  } = data.allMarkdownRemark.edges[0].node.frontmatter

  return (
    <Layout id="home">
      <SEO title="Home" />
      <Banner fluid={banner.childImageSharp.fluid} />
      <section id="home-intro">
        <div className="section__wrapper">
          <h1>{introduction_title}</h1>
          <p>{introduction_description}</p>
        </div>
      </section>
      <ImageContent
        fluid={location_img.childImageSharp.fluid}
        imgType="square"
        bgColor="pink"
      >
        <h2>{location_title}</h2>
        <p>{location_description}</p>
        <Button
          type="button"
          path="/about#studios/"
          bgColor="blue"
          text="See our studios"
        />
      </ImageContent>
      <section id="home-book" className="bgBlue">
        <div className="section__wrapper">
          <h2>Classes Starting Term 3!</h2>
          <Button
            type="button"
            path="/signup/"
            bgColor="sand"
            text="BOOK NOW!"
          />
        </div>
      </section>
      <section id="home-classes">
        <div className="section__wrapper">
          <h2>Dance Classes</h2>
          {classes.map(danceClass => {
            return (
              <ClassCard
                key={danceClass.class_name}
                fixed={danceClass.class_img.childImageSharp.fixed}
                alt="class-photo"
                title={danceClass.class_name}
                subtitle={danceClass.class_description}
                path={`/classes#${kebabCase(danceClass.class_name)}`}
              />
            )
          })}
        </div>
      </section>
      <section id="home-timetable" className="bgBlue">
        <Button
          type="button"
          path="/timetable/"
          bgColor="sand"
          text="View Timetable"
        />
      </section>
      <section id="home-instagram">
        <div className="section__wrapper">
          <h2>@{instagram_name}</h2>
          {instagram_links.map(link => {
            return (
              <div
                className="instagram-post"
                key={link.embed_link}
                dangerouslySetInnerHTML={{ __html: link.embed_link }}
              />
            )
          })}
        </div>
      </section>
      <section id="home-testimonial" className="bgSand">
        <div className="section__wrapper">
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
