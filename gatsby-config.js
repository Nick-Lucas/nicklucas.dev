module.exports = {
  siteMetadata: {
    title: `Nick Lucas`,
    description: `Full-stack problem solver`,
    author: `Nick Lucas`,
  },

  // gh-pages configuration, not required once migrated to full deployment
  pathPrefix: '/nicklucas.co.uk',

  plugins: [
    // Defaults
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nick Lucas`,
        short_name: `NL`,
        start_url: `/`,
        icon: `src/images/headshot.jpeg`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        tableOfContents: {
          pathToSlugField: 'frontmatter.path',
          heading: null,
          maxDepth: 6,
        },
      },
    },

    // Coding resourceas
    {
      resolve: 'gatsby-plugin-page-transitions',
      options: {
        transitionTime: 300,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-resolve-src`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `open sans`,
          `roboto`,
          `source sans pro`,

          // https://medium.com/@joshuacrass/material-icon-font-with-gatsby-af620c46c041
          'material icons',
        ],
      },
    },

    // Content resources
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown`,
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
