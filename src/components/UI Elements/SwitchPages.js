import React from "react"
import styles from "./switchPages.module.css"
import Arrow from "../../assets/icons/arrow.png"
const SwitchPages = ({ handleSkip, skip, maxPage }) => {
  const handleLeft = e => {
    e.stopPropagation()
    handleSkip(-1)
  }
  const handleRight = e => {
    e.stopPropagation()
    handleSkip(1)
  }
  return (
    <div className={styles.container}>
      <div
        className={`${styles.arrow_left} ${styles.arrow} ${
          skip > 0 ? styles.active : ""
        }`}
      >
        <img onClick={handleLeft} src={Arrow} alt="" />
      </div>
      <div className={styles.text}>
        <p>
          Strona {skip + 1} z {maxPage}
        </p>
      </div>
      <div
        className={`${styles.arrow_right} ${styles.arrow} ${
          skip < maxPage - 1 ? styles.active : ""
        }`}
      >
        <img onClick={handleRight} src={Arrow} alt="" />
      </div>
    </div>
  )
}
export default SwitchPages
