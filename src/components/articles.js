import React from "react"
import styles from "../styles/articles.module.css"
import Card from "./ArticleCard"

const Articles = ({ className, activePosts }) => {
  return (
    <section className={`${className} ${styles.articles}`}>
      {activePosts.map((post, i) => {
        return (
          <Card
            img={post.img}
            key={"Articles" + post.post.id + i}
            data={post.post}
          />
        )
      })}
    </section>
  )
}
export default Articles
