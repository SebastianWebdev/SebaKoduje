import React from "react"
import styles from "../styles/slide.module.css"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
/*import moment from "moment"

console.log(moment)*/

const Slide = ({ data }) => {
  //console.log(data)
  const { tags, tittle, cover, description, date } = data
  const ParseDate = new Date(date)
  const day = ParseDate.getDay()
  const month = ParseDate.getMonth()
  const year = ParseDate.getFullYear()
  //console.log(day, month, year)

  return (
    <div className={styles.container}>
      <div
        className={styles.img}
        style={{ backgroundImage: `url(${cover.url})` }}
      >
        <div className={styles.tags_wrap}>
          {tags.map(item => (
            <div className={styles.tag}>{item}</div>
          ))}
        </div>
      </div>
      <div className={styles.text}>
        <p className={styles.date}>
          {day} {month} {year}
        </p>
        <p className={`tittle`}>{tittle}</p>
        <p className={`description`}>{description}</p>
      </div>
    </div>
  )
}

export default Slide
/* Dodać biblioteke moment  */
