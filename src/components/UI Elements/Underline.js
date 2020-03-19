import React from "react"
import styles from "../../styles/underline.module.css"

const Underline = props => {
  console.log(props.styles)

  return <div className={styles.container} style={props.styles}></div>
}
export default Underline
