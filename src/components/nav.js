import React, { useState } from "react"
import styles from "../styles/nav.module.css"
import { Link } from "gatsby"

const Nav = props => {
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
          <Link className={`${styles.item} `} to="/" activeClassName="active">
            Blog
          </Link>
        </li>
        <li>
          <Link
            className={`${styles.item}`}
            to="/Projects"
            activeClassName="active"
          >
            Projekty
          </Link>
        </li>
        <li>
          <Link
            className={`${styles.item} `}
            activeClassName="active"
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
