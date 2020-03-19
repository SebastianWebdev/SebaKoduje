import PropTypes from "prop-types"
import React from "react"
import Nav from "./nav"
import Underline from "./UI Elements/Underline"
import Icons from "./Icons"
import styles from "../styles/header.module.css"

const Header = ({ siteTitle, className }) => (
  <header className={styles.header + " " + className}>
    <div className={styles.row}>
      <h1 className={styles.tittle}>{siteTitle}</h1>
      <Icons>
        <i className={`fab fa-github-square ${styles.icon}`}></i>
        <i className={`fab fa-linkedin ${styles.icon}`}></i>
      </Icons>
    </div>
    <Underline />
    <Nav />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
