import React from "react"
import styles from "../styles/slide.module.css"

import { Link } from "gatsby"
import Img from "gatsby-image"

import Moment from "react-moment"

import "moment/locale/pl"


const findImgForSlide = (images,postId)=>images.filter(img=>img.parent.id===postId);


const Slide = ({ data, imgData }) => {
 
  const { tagi, tittle, id, description, date, slug, coverAuthor,coverSmall } = data
  const createMarkup = ()=>{
    return{__html:coverAuthor}
  }
 const[img,setImg] = React.useState(findImgForSlide(imgData,id)[0])

  return (
    <div className={styles.container}>
      <div
        className={styles.img}
        //style={{ backgroundImage: `url(${coverSmall.url})` }}
      >
        <Img  fluid={img.childImageSharp.fluid}/>
        {coverAuthor?<div className={styles.cover_author} dangerouslySetInnerHTML={createMarkup()}></div>:null}
        <div className={styles.tags_wrap}>
          {tagi.map(item => (
            <div key={item.id} className={styles.tag}>
              <p >{item.tagName}</p>
              
            </div>
          ))}
        </div>
      </div>
      <div className={styles.text}>
        <p className={styles.date}>
          <Moment locale="pl" format={"DD MMMM YYYY"}>
            {date}
          </Moment>
        </p>
        <Link to={`/${slug}`}>
          <h2 className={`tittle`}>{tittle}</h2>
        </Link>
       
        <p className={`description`}>{description}</p>
      </div>
    </div>
  )
}

export default Slide
/* Dodać biblioteke moment  */
