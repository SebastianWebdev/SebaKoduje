import React, { useState, useEffect } from "react"
import styles from "../styles/tags.module.css"

export default function Tag({ item, handleActive, activeTags }) {
  const [isActive, setIsActive] = useState(false)
  const [isDown, setIsDown] = useState(false)

  const handleClick = e => {
    /*if (item.tagName != "Clear all") {
      setIsActive(!isActive)
    }*/
    handleActive(item.tagName)
  }
  const handleDown = e => {
    if (item.tagName === "Clear all") {
      setIsDown(true)
    }
  }
  const handleUp = e => {
    if (item.tagName === "Clear all") {
      setIsDown(false)
    }
  }
  /*-----------------------------------------------effects */
  useEffect(() => {
    const isInActiveTags = activeTags.includes(item.tagName)
    if (isInActiveTags) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  })

  return (
    <div
      onMouseUp={handleUp}
      onMouseDown={handleDown}
      onClick={handleClick}
      className={`${styles.tag} ${isActive ? styles.active : ""} ${
        isDown ? styles.down : ""
      }`}
    >
      <p className={styles.tag_name}>{item.tagName}</p>
    </div>
  )
}
