import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import Banner from "../components/banner/banner"
import Form from "../components/form/form"

export const data = graphql`
  query SignUpPage {
    banner: markdownRemark(fields: { slug: { regex: "/banner/" } }) {
      frontmatter {
        signup_banner_img {
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

const SignUpPage = ({ data }) => {
  const { banner } = data

  const formFields = [
    { type: "text", label: "Child First Name", required: true, width: "half" },
    { type: "text", label: "Child Second Name", required: true, width: "half" },
    { type: "date", label: "Date of Birth", required: true, width: "half" },
    {
      type: "select",
      label: "Gender",
      required: true,
      width: "half",
      options: ["Male", "Female", "Other"],
    },
    { type: "text", label: "Contact Number", required: true, width: "half" },
    {
      type: "text",
      label: "Preschool/Daycare",
      required: true,
      width: "half",
    },
    {
      type: "text",
      label: "Parent/Guardian Name",
      required: true,
      width: "half",
    },
    {
      type: "text",
      label: "Suburb of Residence",
      width: "half",
    },
    { type: "email", label: "Email", required: true },
    {
      type: "text",
      label: "Preferred time and day of classes",
    },
    {
      type: "text",
      label: "How did you hear about us?",
    },
  ]

  const termsAndConditions = (
    <div className="content">
      <h4>Terms and Conditions</h4>
      <ol>
        <li>
          I understand there will be NO CHARGE for the FREE TRIAL classes.
        </li>
        <li>
          I understand that I will not be able to take any photographs in the
          free trial classes.
        </li>
        <li>
          I understand there will be physical contact between students and
          teachers/teaching assistances during classes.
        </li>
      </ol>
    </div>
  )

  return (
    <Layout>
      <Banner
        fluid={banner.frontmatter.signup_banner_img.childImageSharp.fluid}
        title="Sign Up"
      />
      <SEO title="Sign Up" />
      <section id="sign-up" className="bgSand">
        <h2>Sign Up for a Free Trial Week</h2>
        <Form
          formFields={formFields}
          formName="sign-up"
          termsAndConditions={termsAndConditions}
        />
      </section>
    </Layout>
  )
}

export default SignUpPage
