import React from "react"
import styles from "../styles/switchPosts.module.css"
import Arrow from "../assets/icons/arrow.png"
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
  const isPrevius = prevAndNextPosts[0] ? true : false
  const isNext = prevAndNextPosts[1] ? true : false

  return (
    <div className={styles.container}>
      <div className={styles.link_container}>
        <Link
          className={`${styles.link} ${styles.link_left}`}
          to={isPrevius ? `/${prevAndNextPosts[0].slug}` : `/${slug}`}
        >
          {isPrevius ? prevAndNextPosts[0].tittle : null}
        </Link>
      </div>

      <div className={styles.arrow_wrap}>
        <img
          className={`${styles.arrow} ${isPrevius ? "" : styles.inactive}`}
          src={Arrow}
          alt="arrow left"
        />
        <img
          className={`${styles.arrow} ${isNext ? "" : styles.inactive}`}
          src={Arrow}
          alt="arrow left"
        />
      </div>
      <div className={styles.link_container}>
        <Link
          className={`${styles.link} ${styles.link_right}`}
          to={isNext ? `/${prevAndNextPosts[1].slug}` : `/${slug}`}
        >
          {isNext ? prevAndNextPosts[1].tittle : null}
        </Link>
      </div>
    </div>
  )
}
export default SwitchPosts
