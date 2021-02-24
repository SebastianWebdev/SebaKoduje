import React from "react"
import styles from "../styles/main_slider.module.css"

import Slide from "./Slide.js"
import { Carousel } from "react-bootstrap"

import { useStaticQuery, graphql } from "gatsby"

const MainSlider = props => {
  const posts = useStaticQuery(graphql`
    query {
      gcms {
        posts {
          cover {
            url
          }
          coverSmall{
            url
          }
          date
          tittle
          description
          id
          isPopular
          slug
          stage
          coverAuthor
          tagi {
            tagName
          }
        }
      }
    }
  `).gcms.posts
  
const {imgData} = props
console.log("DAne z props do slajdera", imgData)
  return (
    <div className={styles.container}>
      <div className={styles.slide_container}>
        <Carousel controls={false} fade={false}>
          {posts.map(item => (
            <Carousel.Item key={item.id}>
              <Slide data={item} imgData={imgData}  />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  )
}
export default MainSlider
/*
slidaer z bootstrap
graphCMS połączony
*/
