import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Nav from "./nav"
import styles from "../styles/header.module.css"

const Header = ({ siteTitle, className }) => (
  <header className={styles.header + " " + className}>
    <div>{siteTitle}</div>
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
