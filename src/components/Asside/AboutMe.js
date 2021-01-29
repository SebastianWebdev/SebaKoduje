import React from "react"
import styles from "./AboutMe.module.css"

import Underline from "../UI Elements/Underline"
import ButtonSimple from "../UI Elements/ButtonSimple"
export default function AboutMe(props) {
  const underlineStyles = {
    width: "50%",
    alignSelf: "center",
  }
  return (
    <div className={`${props.className} vertical--center`}>
      <h2 className={`tittle ${styles.tittle}`}>O Mnie</h2>
      <div className={styles.img__container}></div>
      <div className={styles.text_container}>
        <p>
          Student informatyki,
          <br /> Pasjonat Programowania.
        </p>
      </div>
      <ButtonSimple text="Więcej" route="/About" />
      <Underline styles={underlineStyles} CustomClass={props.underlLineClass} />
    </div>
  )
}
