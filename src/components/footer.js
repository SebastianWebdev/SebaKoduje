import React from "react"
import styles from "../styles/footer.module.css"

const Footer = ({ className }) => {
  const date = new Date().getFullYear()
  return (
    <footer className={`${className} ${styles.container}`}>
      <h3> &copy; {date} Seba Koduje </h3>
    </footer>
  )
}

export default Footer
