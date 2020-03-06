import React from "react"
import styles from "../styles/articles.module.css"
import Card from "./ArticleCard"
const data = {
  tittle: "Tytuł artykułu",
  desc:
    "W tym artykule dokonamy przeglądu metod i najpopularniejszych bramek płatności internetowych jakie możemy wykorzystać w swoim",
  date: "01 luty 2020",
  tags: ["Poradniki", "JavaScript", "Algorytmy"],
  id: "some id",
  slug: "slug",
}
const Articles = props => (
  <section className={`${props.className} ${styles.articles}`}>
    <Card data={data} />
    <Card data={data} />
    <Card data={data} />
    <Card data={data} />
    <Card data={data} />
    <Card data={data} />
    <Card data={data} />
    <Card data={data} />
    <Card data={data} />
    <Card data={data} />
    <Card data={data} />
    <Card data={data} />
  </section>
)
export default Articles
