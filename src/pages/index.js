import React from "react"
import { graphql } from "gatsby"
import { paramCase } from "change-case"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import Banner from "../components/banner/banner"
import ImageContent from "../components/image-content/image-content"
import Button from "../components/button/button"
import ClassCard from "../components/class-card/class-card"
import TestimonialCarousel from "../components/testimonial-carousel/testimonial-carousel"
import Gallery from "../components/gallery/gallery"
import bbLogo from "../assets/bb-logo-black.png"
import radLogo from "../assets/rad-logo-black.jpg"
import ozTotsLogo from "../assets/oz-tots-logo.png"
import Youtube from "react-youtube"
import Media from "react-media"
import "typeface-montserrat"

export const query = graphql`
  query MyQuery {
    allMarkdownRemark(filter: { fields: { slug: { regex: "/home/" } } }) {
      edges {
        node {
          frontmatter {
            banner {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            show_notification_bar
            notification_content
            introduction_title
            location_title
            location_description
            location_img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            booking_title
            introduction_title
            introduction_description
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
    classesData: allMarkdownRemark(
      sort: { fields: frontmatter___order, order: ASC }
      filter: { fields: { slug: { regex: "/classes/" } } }
    ) {
      nodes {
        frontmatter {
          title
          subtitle
          description
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const {
    show_notification_bar,
    notification_content,
    introduction_title,
    introduction_description,
    banner,
    location_img,
    location_title,
    location_description,
    booking_title,
    testimonials = [],
    instagram_name,
    instagram_links = [],
  } = data.allMarkdownRemark.edges[0].node.frontmatter

  const classes = data.classesData ? data.classesData.nodes : []

  return (
    <Layout
      id="home"
      notificationBarConfig={{
        show: show_notification_bar,
        content: notification_content,
      }}
    >
      <SEO title="Home" />
      <Banner fluid={banner.childImageSharp.fluid} gradient={false} />
      <section id="home-intro">
        <div className="section__wrapper section__wrapper--content">
          <img id="home-logo" src={bbLogo} alt="beach ballerinas logo" />
          {/* <h1>{introduction_title}</h1> */}
          <p>{introduction_description}</p>
          <div className="flex-container flex-container--justify-content-center">
            <img id="home-rad" src={radLogo} alt="RAD Ballet Certificate" />
            <img id="home-oz-tots" src={ozTotsLogo} alt="Oz Tots" />
          </div>
        </div>
      </section>
      <section id="intro-video" className="bgSand">
        <div className="section__wrapper flex-center">
          <h2>Dance and the sea, where we want to be!</h2>

          <Media queries={{ small: { maxWidth: 769 } }}>
            {matches => (
              <Youtube
                className="content"
                videoId="SR3DlafkQDI"
                opts={{
                  height: matches.small ? 200 : 500,
                  width: matches.small ? 300 : 800,
                  playerVars: {
                    autoplay: 1,
                  },
                }}
              />
            )}
          </Media>
        </div>
      </section>
      <ImageContent fluid={location_img.childImageSharp.fluid} bgColor="pink">
        <div className="home-location-content">
          <h2>{location_title}</h2>
          <p>{location_description}</p>
        </div>
        <Button
          type="button"
          path="/about#studios"
          bgColor="blue"
          text="See our studios"
        />
      </ImageContent>
      <section id="home-book" className="bgBlue">
        <div className="section__wrapper">
          <h2>{booking_title}</h2>
          <Button
            type="button"
            path="/sign-up"
            bgColor="sand"
            text="BOOK NOW!"
          />
        </div>
      </section>
      <section id="home-classes">
        <div className="section__wrapper">
          <h2>Dance Classes</h2>
          <Gallery>
            {classes.map(danceClass => {
              return (
                <ClassCard
                  key={danceClass.frontmatter.title}
                  fluid={danceClass.frontmatter.image.childImageSharp.fluid}
                  alt="class-photo"
                  title={danceClass.frontmatter.title}
                  subtitle={danceClass.frontmatter.subtitle}
                  path={`/classes#${paramCase(danceClass.frontmatter.title)}`}
                />
              )
            })}
          </Gallery>
        </div>
      </section>
      <section id="home-timetable" className="bgBlue">
        <Button
          type="button"
          path="/timetable"
          bgColor="sand"
          text="View Timetable"
        />
      </section>
      <section id="home-instagram">
        <div className="section__wrapper">
          <h2>@{instagram_name}</h2>
          <Gallery>
            {instagram_links.map(link => {
              return (
                <div
                  className="instagram-post"
                  key={link.embed_link}
                  dangerouslySetInnerHTML={{ __html: link.embed_link }}
                />
              )
            })}
          </Gallery>
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
