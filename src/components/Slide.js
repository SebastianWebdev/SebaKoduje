import React from "react"
import styles from "../styles/slide.module.css"

import Moment from "react-moment"
import "moment/locale/pl"

const Slide = ({ data }) => {
  //console.log(data)
  const { tagi, tittle, cover, description, date } = data

  //console.log(day, month, year)

  return (
    <div className={styles.container}>
      <div
        className={styles.img}
        style={{ backgroundImage: `url(${cover.url})` }}
      >
        <div className={styles.tags_wrap}>
          {tagi.map(item => (
            <div key={item.id} className={styles.tag}>
              {item.tagName}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.text}>
        <p className={styles.date}>
          <Moment locale="pl" format={"DD MMMM YYYY"}>
            {date}
          </Moment>
        </p>
        <p className={`tittle`}>{tittle}</p>
        <p className={`description`}>{description}</p>
      </div>
    </div>
  )
}

export default Slide
/* Dodać biblioteke moment  */
