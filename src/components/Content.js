import React from "react"
import MainSlider from "./MainSlider"
import styles from "../styles/content.module.css"
import Articles from "./articles"
import Tags from "./Tags"
const Content = props => (
  <>
    <section className={`${styles.section} ${styles.slider_wrap}`}>
      <MainSlider />
    </section>
    <Tags></Tags>
    <Articles className={styles.section} />
  </>
)

export default Content
