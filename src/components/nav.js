import React from "react"
import styles from "../styles/nav.module.css"
import { Link } from "gatsby"

const Nav = props => (
  <nav className={styles.container}>
    <ul className={styles.menu}>
      <li>
        <Link className={styles.item} to="/">
          Blog
        </Link>
      </li>
      <li>
        {" "}
        <Link className={styles.item} to="/">
          Projekty
        </Link>
      </li>
      <li>
        {" "}
        <Link className={styles.item} to="/">
          O mnie
        </Link>
      </li>
      <li>
        {" "}
        <Link className={styles.item} to="/">
          Kontakt
        </Link>
      </li>
    </ul>
  </nav>
)

export default Nav
