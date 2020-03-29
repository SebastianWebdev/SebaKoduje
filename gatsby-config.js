module.exports = {
  siteMetadata: {
    title: `Seba Koduje`,
    description: ``,
    author: `Sebastian Gołębiowski`,
  },
  plugins: [
    {
      resolve: `gatsby-source-graphcms`,
      options: {
        endpoint: `https://api-euwest.graphcms.com/v1/ck5xodpw122y501fgh12y4iky/master`,
        query: `{ posts {
          author{
            bibliography
            id
            name
          }
          content {
            html
          }
          date
          description
          id
          slug
          tittle
          isPopular
          tagi {
            tagName
          }
          cover {
            url
          }
        }}`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Seba Koduje`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },

    {
      resolve: "gatsby-source-graphql",
      options: {
        // The top level query type, can be anything you want!
        typeName: "GCMS",
        // The field you'll query against, can also be anything you want.
        fieldName: "gcms",
        // Your API endpoint, available from the dashboard and settings window.
        url:
          "https://api-euwest.graphcms.com/v1/ck5xodpw122y501fgh12y4iky/master",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
