import React from "react"
import styles from "../styles/nav.module.css"
import { Link } from "gatsby"

const Nav = props => {
  const url = window.location.pathname
  console.log(url)

  return (
    <nav className={`${styles.container} ${styles.open}`}>
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
        <li>
          <Link
            className={`${styles.item} ${url === "/Contact" ? "active" : ""}`}
            to="/Contact"
          >
            Kontakt
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
