import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ absolutePath }) => {
  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default Image
