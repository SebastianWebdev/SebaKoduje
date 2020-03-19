import React from "react"
import styles from "./AboutMe.module.css"

import Underline from "../UI Elements/Underline"

export default function AboutMe(props) {
  const underlineStyles = {
    width: "50%",
    alignSelf: "center",
  }
  return (
    <div className={`${props.className} vertical--center`}>
      <div className={styles.img__container}></div>
      <Underline styles={underlineStyles} />
    </div>
  )
}
