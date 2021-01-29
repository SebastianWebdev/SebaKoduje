const path = require("path")

const { createRemoteFileNode } = require("gatsby-source-filesystem")

exports.onCreateNode = async ({
  node,
  actions: { createNode },
  store,
  cache,
  createNodeId,
}) => {
  if (node.internal.type === "post") {
    let fileNode = await createRemoteFileNode({
      url: node.cover.url,
      parentNodeId: node.id,
      createNode,
      createNodeId,
      cache,
      store,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const postTemplate = path.resolve("src/templates/blogPost/BlogPost.js")
  const postQuery = await graphql(`
    query {
      allPost {
        nodes {
          author {
            bibliography
            name
            id
          }
          content {
            html
          }
          date(formatString: "")
          description
          id
          slug
          tagi {
            tagName
            id
          }
          tittle
        }
      }
    }
  `)
  postQuery.data.allPost.nodes.forEach(post => {
    createPage({
      path: post.slug,
      component: postTemplate,
      context: {
        data: post,
      },
    })
  })

  /*console.log("-----------------------------------------------------")

  console.log(postQuery.data.allPost.nodes)
  console.log("-----------------------------------------------------")*/
}
