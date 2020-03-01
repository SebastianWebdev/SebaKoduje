import React from "react"
import { Link } from "gatsby"

import Layout from "../layout/layout"
import Content from "../components/Content"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Content />
  </Layout>
)

export default IndexPage
