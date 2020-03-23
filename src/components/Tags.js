import React from "react"

import styles from "../styles/tags.module.css"

import { useStaticQuery, graphql } from "gatsby"

const Tags = props => {
  const tags = useStaticQuery(graphql`
    query {
      gcms {
        tags {
          tagName
        }
      }
    }
  `).gcms.tags

  return (
    <section className={styles.container}>
      {tags.map(item => (
        <div key={item.id} className={styles.tag}>
          <p className={styles.tag_name}>{item.tagName}</p>
        </div>
      ))}
    </section>
  )
}
export default Tags
