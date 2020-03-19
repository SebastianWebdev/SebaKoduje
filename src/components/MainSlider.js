import React from "react"
import styles from "../styles/main_slider.module.css"

import Slide from "./Slide.js"
import { Carousel } from "react-bootstrap"

import { useStaticQuery, graphql } from "gatsby"
const data = {
  articles: [
    {
      tittle: "Tytuł artykułu 1",
      desc:
        "W tym artykule dokonamy przeglądu metod i najpopularniejszych bramek płatności internetowych jakie możemy wykorzystać w swoim",
      date: "01 luty 2020",
      tags: ["Poradniki", "JavaScript", "Algorytmy"],
      id: "some id",
      slug: "1",
      img: { path: "simon-matzinger-twukN12EN7c-unsplash.jpg" },
    },
    {
      tittle: "Tytuł artykułu 1",
      desc:
        "W tym artykule dokonamy przeglądu metod i najpopularniejszych bramek płatności internetowych jakie możemy wykorzystać w swoim",
      date: "01 luty 2020",
      tags: ["Poradniki", "JavaScript", "Algorytmy"],
      id: "some id",
      slug: "2",
      img: { path: "simon-matzinger-twukN12EN7c-unsplash.jpg" },
    },
    {
      tittle: "Tytuł artykułu 2",
      desc:
        "W tym artykule dokonamy przeglądu metod i najpopularniejszych bramek płatności internetowych jakie możemy wykorzystać w swoim",
      date: "01 luty 2019",
      tags: ["JavaScript", "Algorytmy"],
      id: "some id",
      slug: "3",
      img: { path: "simon-matzinger-twukN12EN7c-unsplash.jpg" },
    },
    {
      tittle: "Tytuł artykułu 3",
      desc:
        "W tym artykule dokonamy przeglądu metod i najpopularniejszych bramek płatności internetowych jakie możemy wykorzystać w swoim",
      date: "31 luty 2020",
      tags: ["Poradniki"],
      id: "some id",
      slug: "4",
      img: { path: "simon-matzinger-twukN12EN7c-unsplash.jpg" },
    },
  ],
}

const MainSlider = props => {
  const posts = useStaticQuery(graphql`
    query {
      gcms {
        posts {
          content {
            html
          }
          date
          description
          slug
          id
          tags
          tittle
          cover {
            url
          }
          author {
            name
          }
        }
      }
    }
  `).gcms.posts

  return (
    <div className={styles.container}>
      <div className={styles.slide_container}>
        <Carousel controls={false} fade={false}>
          {posts.map(item => (
            <Carousel.Item>
              <Slide data={item} />
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
