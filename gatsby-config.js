module.exports = {
  siteMetadata: {
    title: `Beach Ballerinas`,
    description: `Beach ballerinas is a ballet school located in Bondi, Sydney offering ballet and jazz classes to children.`,
    author: `Liam Swift`,
    siteUrl: `https://beachballerinas.com.au`,
    social: {
      instagram: `@beach_ballerinas`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-instagram-embed",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "uploads",
        path: `${__dirname}/static/cms-assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-plugin-netlify-cms-paths`,
            options: {
              // Path to your Netlify CMS config file
              cmsConfig: `/static/admin/config.yml`,
            },
          },
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: `gatsby-remark-images`,
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        data: `@import "${__dirname}/src/styles/variables";`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify-cms`,

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
