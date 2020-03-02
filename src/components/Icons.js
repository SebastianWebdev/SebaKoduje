import React, { Children } from "react"
import styles from "../styles/icons.module.css"

const Icons = ({ children }) => (
  <div className={styles.container}>{children}</div>
)
export default Icons
