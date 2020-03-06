import React from "react"
import MainSlider from "./MainSlider"
import styles from "../styles/content.module.css"
import Articles from "./articles"
const Content = props => (
  <>
    <section className={`${styles.section} ${styles.slider_wrap}`}>
      <MainSlider />
    </section>
    <Articles className={styles.section} />
  </>
)

export default Content
