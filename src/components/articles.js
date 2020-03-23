import React from "react"
import styles from "../styles/articles.module.css"
import Card from "./ArticleCard"
import { useStaticQuery, graphql } from "gatsby"

const Articles = props => {
  const posts = useStaticQuery(graphql`
    query {
      gcms {
        posts {
          date
          description
          id
          slug
          tittle
          tagi {
            tagName
          }
          cover {
            url
          }
        }
      }
    }
  `).gcms.posts

  return (
    <section className={`${props.className} ${styles.articles}`}>
      {posts.map(post => (
        <Card key={post.id} data={post} />
      ))}
    </section>
  )
}
export default Articles
