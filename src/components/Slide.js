import React from "react"
import styles from "../styles/slide.module.css"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Slide = ({ data }) => {
  const img = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "simon-matzinger-twukN12EN7c-unsplash.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log(data)

  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <div className={styles.tags_wrap}>
          {data.tags.map(item => (
            <div className={styles.tag}>{item}</div>
          ))}
        </div>
        <Img fluid={img.placeholderImage.childImageSharp.fluid} />
      </div>
      <div className={styles.text}></div>
    </div>
  )
}

export default Slide
