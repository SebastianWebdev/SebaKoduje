import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../components/header"
import Aside from "../components/aside"
import Footer from "../components/footer"
import "./layout.css"
import styles from "./layout.module.css"
const { main, container, item_a, item_b, item_c, item_d } = styles
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={container}>
      <Header className={item_a} siteTitle={data.site.siteMetadata.title} />
      <main className={`${main} ${item_b}`}>{children}</main>
      <Aside className={item_c} />
      <Footer className={item_d} />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
