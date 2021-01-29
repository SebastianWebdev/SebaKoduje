import React, { useEffect } from "react"

import Layout from "../../layout/layout.js"
import SwitchPosts from "../../components/SwitchPosts"
import CommentsModule from "../../components/CommentsModule"

import styles from "./BlogPost.module.css"
import "./blog.css"
import { section } from "../../styles/content.module.css"

import { graphql } from "gatsby"
import Img from "gatsby-image"

import Moment from "react-moment"
import "moment/locale/pl"

const BlogPost = ({
  pageContext,
  data: {
    allFile: { nodes },
  },
}) => {
  useEffect(() => {
    const element = document.getElementById("content")
    element.innerHTML = pageContext.data.content.html
  }, [])

  const img = nodes.filter(node => node.parent.id === pageContext.data.id)[0]
  console.log(pageContext, "---------------------------------------")
  const tags = pageContext.data.tagi.map(tag => (
    <div key={tag.id + pageContext.data.id} className={styles.tag}>
      <p className={styles.tag_text}>{tag.tagName}</p>
    </div>
  ))
  return (
    <Layout>
      {
        <>
          <section className={`${section} ${styles.header}`}>
            <div className={styles.tags}>{tags}</div>
            <h1 className={styles.tittle}>{pageContext.data.tittle}</h1>
            <div className="cover_wrap">
              <Img fluid={img.childImageSharp.fluid} />
              <div className={styles.post_info}>
                <p>{pageContext.data.author.name}</p>
                <p>
                  {
                    <Moment locale="pl" format={"DD MMMM YYYY"}>
                      {pageContext.data.date}
                    </Moment>
                  }
                </p>
              </div>
            </div>
          </section>
          <section
            id="content"
            className={`${section} ${styles.post_text}`}
          ></section>
          <section className={`${section} ${styles.switch_posts}`}>
            <SwitchPosts
              id={pageContext.data.id}
              slug={pageContext.data.slug}
            />
          </section>
          <CommentsModule postId={pageContext.data.id} />
        </>
      }
    </Layout>
  )
}
export const ImgForPost = graphql`
  {
    allFile {
      nodes {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
        parent {
          id
        }
      }
    }
  }
`
export default BlogPost
