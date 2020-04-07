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
            tag: 'svg',
            name: 'Logo',
            props: {
              className: "logo-header",
              title: 'Logo Studio Leandro Neves'
            }
          }
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content-home`,
        path: `${__dirname}/src/static/assets/img/content-home`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `slides`,
        path: `${__dirname}/src/static/assets/img/slides`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gallery-home`,
        path: `${__dirname}/src/static/assets/img/gallery-home`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content-home`,
        path: `${__dirname}/src/static/assets/img/content-home`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `full-image`,
        path: `${__dirname}/src/static/assets/img/full-image`
      }
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
