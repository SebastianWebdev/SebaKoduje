import React, { useState } from "react"

import styles from "../styles/tags.module.css"

import { useStaticQuery, graphql } from "gatsby"
import Tag from "./Tag"

const Tags = ({ activeTags, handleActiveTags }) => {
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
        <Tag
          activeTags={activeTags}
          handleActive={handleActiveTags}
          key={"Tags" + item.id}
          item={item}
        />
      ))}
    </section>
  )
}
export default Tags
