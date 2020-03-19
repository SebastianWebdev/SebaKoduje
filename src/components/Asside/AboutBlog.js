import React from "react"
import styles from "./AboutBlog.module.css"
import Underline from "../UI Elements/Underline"
export default function AboutBlog(props) {
  const underlineStyles = {
    width: "50%",
    alignSelf: "center",
  }
  return (
    <div className={`${props.className}`}>
      <h2 className={`tittle`}>O Blogu</h2>
      <p className={`description`}>
        SebaKoduje to blog o tym, co ale nie o tym co nie. Będzie tutaj to i
        tamto a nawet i owo. Jak coś robic i jak nie robić
      </p>
      <Underline styles={underlineStyles} />
    </div>
  )
}
