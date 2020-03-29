import React from "react"
import styles from "../styles/switchPosts.module.css"

import { useStaticQuery, graphql } from "gatsby"

import { Link } from "gatsby"

import findNextAndPrevPosts from "../functions/findNextAndPrevPosts"

const SwitchPosts = ({ id, slug }) => {
  const posts = useStaticQuery(graphql`
    query {
      gcms {
        posts(orderBy: date_DESC) {
          tittle
          date
          id
          slug
        }
      }
    }
  `).gcms.posts
  console.log(posts)
  const prevAndNextPosts = findNextAndPrevPosts(posts, id)

  return (
    <div className={styles.wrap}>
      <Link
        to={prevAndNextPosts[0] ? `/${prevAndNextPosts[0].slug}` : `/${slug}`}
      >
        <div>{prevAndNextPosts[0] ? prevAndNextPosts[0].tittle : null}</div>
      </Link>
      <div></div>
      <Link
        to={prevAndNextPosts[1] ? `/${prevAndNextPosts[1].slug}` : `/${slug}`}
      >
        <div>{prevAndNextPosts[1] ? prevAndNextPosts[1].tittle : null}</div>
      </Link>
    </div>
  )
}
export default SwitchPosts
