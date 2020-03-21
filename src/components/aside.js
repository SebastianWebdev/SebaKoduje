import React from "react"
import styles from "../styles/aside.module.css"
/* Import items */
import AboutBlog from "./Asside/AboutBlog"
import AboutMe from "./Asside/AboutMe"
const Aside = ({ className }) => {
  console.log(styles.underline)

  return (
    <aside className={`${className} ${styles.container}`}>
      <AboutBlog className={styles.item} underlLineClass={styles.underline} />
      <AboutMe className={styles.item} underlLineClass={styles.underline} />
    </aside>
  )
}
export default Aside
