module.exports = {
  siteMetadata: {
    title: `Studio Leandro Neves`,
    description: `Site para divulgação do trabalho do arquiteto Leandro Neves.`,
    author: ``,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
          options: {
            tag: "svg",
          },
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content-home`,
        path: `${__dirname}/src/static/assets/img/content-home`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `slides`,
        path: `${__dirname}/src/static/assets/img/slides`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gallery-home`,
        path: `${__dirname}/src/static/assets/img/gallery-home`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content-home`,
        path: `${__dirname}/src/static/assets/img/content-home`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content-portfolio`,
        path: `${__dirname}/src/static/assets/img/content-portfolio`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content-portfolio-residencial`,
        path: `${__dirname}/src/static/assets/img/content-portfolio-residencial`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content-nos`,
        path: `${__dirname}/src/static/assets/img/content-nos`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content-midia`,
        path: `${__dirname}/src/static/assets/img/content-midia`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content-contato`,
        path: `${__dirname}/src/static/assets/img/content-contato`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `full-image`,
        path: `${__dirname}/src/static/assets/img/full-image`,
      },
    },
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `transparent`,
        theme_color: `transparent`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
