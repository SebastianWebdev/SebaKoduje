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

import SEO from "../../components/seo"
import copy from "../../assets/icons/copy_black.png"

const BlogPost = ({
  pageContext,
  data: {
    allFile: { nodes },
  },
}) => {
 /* useEffect(()=>{
    const copyElements = document.querySelectorAll("[data-copy]");
    copyElements.forEach(el=>{
      const img = document.createElement("img");
      const imgWrap = document.createElement("div");
      const tooltip = document.createElement("span");
      tooltip.role = "tooltip";
      tooltip.innerText="copy";
      imgWrap.classList.add("copy-img_wrap")
      img.classList.add("copy_img")
      img.src = copy
      imgWrap.appendChild(img);
      imgWrap.appendChild(tooltip);
      el.appendChild(imgWrap);
      //
      const eventHolder = document.querySelector(".event-holder");
      eventHolder.addEventListener("click",evt=>{
        evt.stopPropagation()
        const eventElement = evt.target
        if(eventElement.classList.contains("copy-img_wrap")){
          console.log(eventElement)
        }
      })
    })

  },[]);*/
  const createMarkup = (htmlText)=>{
    return {__html:htmlText}
  }

  const img = nodes.filter(node => node.parent.id === pageContext.data.id)[0]
  
  const tags = pageContext.data.tagi.map(tag => (
    <div key={tag.id + pageContext.data.id} className={styles.tag}>
      <p className={styles.tag_text}>{tag.tagName}</p>
    </div>
  ))
  return (
    <Layout>
      <SEO title={pageContext.data.tittle}/>
      {
        <>
          <section className={`${section} ${styles.header} `}>
            <div className={styles.tags}>{tags}</div>
            <h1 className={styles.tittle}>{pageContext.data.tittle}</h1>
            <div className={styles.cover_wrap}>
              {pageContext.data.coverAuthor?<div className={styles.cover_author} dangerouslySetInnerHTML={createMarkup(pageContext.data.coverAuthor)}></div>:null}
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
          <section dangerouslySetInnerHTML={createMarkup(pageContext.editedData || pageContext.data.content.html)}
            className={`${section} ${styles.post_text} event-holder`}
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
