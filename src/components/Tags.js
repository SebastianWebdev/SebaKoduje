import React, { useState } from "react"

import styles from "../styles/tags.module.css"

import { useStaticQuery, graphql } from "gatsby"
import Tag from "./Tag"

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
  const [activeTags, setActiveTags] = useState([])
  const handleActiveTags = TagName => {
    if (TagName === "Clear all") {
      setActiveTags([])
    } else {
      const tags = [...activeTags]
      const index = tags.indexOf(TagName)
      if (index < 0) {
        tags.push(TagName)
      } else {
        tags.splice(index, 1)
      }
      setActiveTags(tags)
    }
  }
  return (
    <section className={styles.container}>
      {tags.map(item => (
        <Tag
          activeTags={activeTags}
          handleActive={handleActiveTags}
          key={item.id}
          item={item}
        />
      ))}
    </section>
  )
}
export default Tags
