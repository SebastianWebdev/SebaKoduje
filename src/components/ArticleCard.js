import React from "react"
import { Link } from "gatsby"

import Img from "gatsby-image"
import styles from "../styles/card.module.css"

import Moment from "react-moment"
import "moment/locale/pl"
const Card = ({ data, img }) => {
  console.log(data)

  return (
    <div className={styles.container}>
      <div className={styles.tags_wrap}>
        {data.tagi.map(item => (
          <div key={"post" + data.id + Math.random()} className={styles.tag}>
            {item.tagName}
          </div>
        ))}
      </div>
      <div className={styles.img_wrap}>
        <Img fluid={img.childImageSharp.fluid} />
      </div>
      <div className={styles.card_content_wrap}>
        <h4 className={styles.card_date}>
          {
            <Moment locale="pl" format={"DD MMMM YYYY"}>
              {data.date}
            </Moment>
          }
        </h4>
        <Link to={`/${data.slug}`}>
          <h2 className={`tittle`}>{data.tittle}</h2>
        </Link>
        <p className={`description`}>{data.description}</p>
      </div>
    </div>
  )
}
export default Card
