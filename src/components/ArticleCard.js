import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styles from "../styles/card.module.css"

import Moment from "react-moment"
import "moment/locale/pl"
const Card = ({ data }) => {
  console.log(data)

  return (
    <div className={styles.container}>
      <div className={styles.tags_wrap}>
        {data.tagi.map(item => (
          <div key={item.id} className={styles.tag}>
            {item.tagName}
          </div>
        ))}
      </div>
      <div className={styles.img_wrap}>
        <img src={data.cover.url} alt="" />
      </div>
      <div className={styles.card_content_wrap}>
        <h4 className={styles.card_date}>
          {
            <Moment locale="pl" format={"DD MMMM YYYY"}>
              {data.date}
            </Moment>
          }
        </h4>
        <h2 className={`tittle`}>{data.tittle}</h2>
        <p className={`description`}>{data.description}</p>
      </div>
    </div>
  )
}
export default Card
