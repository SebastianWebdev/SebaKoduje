import React from "react"
import styles from "../styles/aside.module.css"
/* Import items */
import AboutBlog from "./Asside/AboutBlog"
import AboutMe from "./Asside/AboutMe"
const Aside = ({ className }) => (
  <aside className={`${className} ${styles.container}`}>
    <AboutBlog className={styles.item} />
    <AboutMe className={styles.item} />
  </aside>
)
export default Aside
