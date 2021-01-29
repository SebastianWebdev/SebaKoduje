import React from "react"
import { Link } from "gatsby"

import styles from "./buttonSimple.module.css"
export default function ButtonSimple({ text, customStyles,route }) {
  return (
    <button style={styles} className={styles.btn}>
      <Link to={route}>
      {text}
      </Link>
     
    </button>
  )
}
