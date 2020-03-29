import React from "react"
import styles from "../styles/articles.module.css"
import Card from "./ArticleCard"
import { useStaticQuery, graphql } from "gatsby"
//import Image from "./image"
const Articles = props => {
  const post2 = useStaticQuery(graphql`
    query {
      allPost {
        nodes {
          author {
            bibliography
            name
            id
          }
          date(formatString: "")
          description
          id
          slug
          tagi {
            tagName
          }
          tittle
        }
      }
      allFile {
        nodes {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
          parent {
            id
          }
        }
      }
    }
  `)

  return (
    <section className={`${props.className} ${styles.articles}`}>
      {post2.allPost.nodes.map(post => {
        const img = post2.allFile.nodes.filter(
          item => item.parent.id === post.id
        )[0]

        return <Card img={img} key={post.id} data={post} />
      })}
    </section>
  )
}
export default Articles
