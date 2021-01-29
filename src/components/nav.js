import React, { useState } from "react"
import styles from "../styles/nav.module.css"
import { Link } from "gatsby"

const Nav = props => {
  const url = window.location.pathname
  console.log(url)
  const [isNavOpen, setIsNavOpen] = useState(false)
  const handleNavButton = e => {
    setIsNavOpen(!isNavOpen)
  }
  return (
    <nav className={`${styles.container} ${isNavOpen ? styles.open : ""}`}>
      <div
        onClick={handleNavButton}
        className={`${styles.mobile_close} ${!isNavOpen ? styles.open : ""}`}
      >
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
      <ul className={styles.menu}>
        <li>
          <Link
            className={`${styles.item} ${url === "/" ? "active" : ""}`}
            to="/"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            className={`${styles.item} ${url === "/Projects" ? "active" : ""}`}
            to="/Projects"
          >
            Projekty
          </Link>
        </li>
        <li>
          <Link
            className={`${styles.item} ${url === "/About" ? "active" : ""}`}
            to="/About"
          >
            O mnie
          </Link>
        </li>
   
      </ul>

      <button
        onClick={handleNavButton}
        className={`${styles.mobile_open_btn} ${isNavOpen ? styles.open : ""}`}
      >
        Menu
      </button>
    </nav>
  )
}

export default Nav
