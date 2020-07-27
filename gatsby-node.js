const { createFilePath } = require(`gatsby-source-filesystem`)
const { fmImagesToRelative } = require("gatsby-remark-relative-images")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    fmImagesToRelative(node)
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type HomeSchema implements Node {
      banner: File
      location_title: String
      location_description: String
      location_img: File
      booking_title: String
      introduction_title: String
      introduction_description:String
      instagram_name: String
    }

    type MarkdownRemarkFrontmatter implements Node {
      classes: [ClassSchema]
    }

    type ClassSchema implements Node {
      class_age_group: String
      class_name: String
      class_description: String
      class_img: File
    }
  `)
}
