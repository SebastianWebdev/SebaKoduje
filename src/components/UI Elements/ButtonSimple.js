import React from "react"

import styles from "./buttonSimple.module.css"
export default function ButtonSimple({ text, customStyles }) {
  return (
    <button style={styles} className={styles.btn}>
      {text}
    </button>
  )
}
