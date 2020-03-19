import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styles from "../styles/card.module.css"

const Card = ({ data }) => {
  const img = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "redy.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className={styles.container}>
      <div className={styles.tags_wrap}>
        {data.tags.map(item => (
          <div className={styles.tag}>{item}</div>
        ))}
      </div>
      <div className={styles.img_wrap}>
        <Img fluid={img.placeholderImage.childImageSharp.fluid} />
      </div>
      <div className={styles.card_content_wrap}>
        <h4 className={styles.card_date}>{data.date}</h4>
        <h2 className={`tittle`}>{data.tittle}</h2>
        <p className={`description`}>{data.desc}</p>
      </div>
    </div>
  )
}
export default Card
