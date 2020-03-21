import React from "react"
import styles from "../../styles/underline.module.css"

const Underline = props => {
  return (
    <div
      className={`${styles.container} ${props.CustomClass}`}
      style={props.styles}
    ></div>
  )
}
export default Underline
