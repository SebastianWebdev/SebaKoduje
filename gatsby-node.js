const path = require("path")
const postData = require("./src/htmlPostContent/data")

const { createRemoteFileNode } = require("gatsby-source-filesystem")

exports.onCreateNode = async({
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

exports.createPages = async({ graphql, actions }) => {
    const { createPage } = actions
    const postTemplate = path.resolve("src/templates/blogPost/BlogPost.js")
    const postQuery = await graphql(`
    {gcms{
      posts(stage:PUBLISHED) {
        id
        tittle
        description
        content{
          html
        }
        cover{
          url
        }
        slug
        date
        author{
          name
        }
        tagi{
          tagName
        }
        isPopular
        coverAuthor
      }
    }
  }
  `)


    postQuery.data.gcms.posts.forEach(post => {
        createPage({
            path: post.slug,
            component: postTemplate,
            context: {
                data: post,
                editedData: postData.getPostContent(post.id)
            },
        })
    })


}