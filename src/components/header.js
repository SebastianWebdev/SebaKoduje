import PropTypes from "prop-types"
import React from "react"
import Nav from "./nav"
import Underline from "./Underline"
import styles from "../styles/header.module.css"

const Header = ({ siteTitle, className }) => (
  <header className={styles.header + " " + className}>
    <h1 className={styles.tittle}>{siteTitle}</h1>
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
