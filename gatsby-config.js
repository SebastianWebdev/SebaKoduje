module.exports = {
    siteMetadata: {
        title: `Seba Koduje`,
        description: ``,
        author: `Sebastian Gołębiowski`,
    },
    plugins: [{
            resolve: `gatsby-source-graphcms`,
            options: {
                endpoint: `https://api-eu-central-1.graphcms.com/v2/ckl0wxiuyqrje01ywdszr7mej/master`,
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
          coverAuthor
          tagi {
            tagName
            id
          }
          cover {
            url
          }
          coverSmall{
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
                short_name: `Seba Koduje`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#149da2`,
                display: `minimal-ui`,
                icon: `src/images/logo_maskable.png`, // This path is relative to the root of the site.
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
                url: "https://api-eu-central-1.graphcms.com/v2/ckl0wxiuyqrje01ywdszr7mej/master",
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        `gatsby-plugin-offline`,
    ],
}