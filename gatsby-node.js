const path = require(`path`)
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
