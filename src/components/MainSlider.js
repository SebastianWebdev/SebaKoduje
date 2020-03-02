import React from "react"
import styles from "../styles/main_slider.module.css"
import Image from "./image"
const MainSlider = props => (
  <div className={styles.container}>
    <div className={styles.img}>
      <Image />
    </div>
    <div className={styles.text}></div>
  </div>
)
export default MainSlider
//rebuild slider, need slide node between container and img and text elements. slide is a slider item its a wrapper for rest of items.
// nead to create dots to show what slide is active.
// make a slide external react component.
// generate slides from external data surce.
// Check if static image querry will be better over fluid parameter.
