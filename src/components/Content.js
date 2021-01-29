import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import MainSlider from "./MainSlider"
import styles from "../styles/content.module.css"
import Articles from "./articles"
import Tags from "./Tags"
import SwitchPages from "./UI Elements/SwitchPages"
// helpers function
const findImgForArticle = (fileArr, postId) => {
  const arr = [...fileArr]
  return arr.filter(item => item.parent.id === postId)[0]
}
const combinePostsAndImg = (postsArr = [], imgArr = []) => {
  const finalData = []
  postsArr.forEach(post => {
    const img = findImgForArticle(imgArr, post.id)
    const obj = { post, img }
    finalData.push(obj)
  })
  return finalData
}
const paginateArray = (array = [], limit = 10, skip = 0) => {
  const start = limit * skip
  const end = start + limit
  return array.slice(start, end)
}
const findActivePosts = (posts = [], tags = [], limit = 1, skip = 0) => {
  const postArr = []
  const paginatedArr = paginateArray(posts, limit, skip)
  paginatedArr.forEach(item => {
    const tagsFromPost = item.post.tagi
    let isActive = false
    tagsFromPost.forEach(tag => {
      if (tags.includes(tag.tagName)) {
        isActive = true
      }
    })
    if (isActive) {
      postArr.push(item)
    }
  })
  if (tags.length === 0) {
    return paginatedArr
  }
  return postArr
}

const Content = props => {
  const post2 = useStaticQuery(graphql`
    query {
      allPost {
        nodes {
          author {
            bibliography
            name
            id
          }
          date(formatString: "")
          description
          id
          slug
          tagi {
            tagName
          }
          tittle
        }
      }
      allFile {
        nodes {
          childImageSharp {
            fluid(maxWidth: 400, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
          parent {
            id
          }
        }
      }
    }
  `)
  const [activeTags, setActiveTags] = useState([])
  const [activePosts, setActivePosts] = useState([])
  const [postsPageNr, setpostsPageNr] = useState(0)
  const [postsLimit, setpostsLimit] = useState(12)
  const [data, setData] = useState(
    combinePostsAndImg(post2.allPost.nodes, post2.allFile.nodes)
  )
  const maxPages =
    (data.length / postsLimit) % postsLimit === 0
      ? Math.floor(data.length / postsLimit)
      : Math.floor(data.length / postsLimit) + 1

  useEffect(() => {
    setActivePosts(findActivePosts(data, [], postsLimit, postsPageNr))
  }, [])
  const handleActiveTags = TagName => {
    if (TagName === "Clear all") {
      setActiveTags([])
      setActivePosts(findActivePosts(data, [], postsLimit, postsPageNr))
    } else {
      const tags = [...activeTags]
      const index = tags.indexOf(TagName)
      if (index < 0) {
        tags.push(TagName)
      } else {
        tags.splice(index, 1)
      }
      setActiveTags(tags)
      const posts = findActivePosts(data, tags, postsLimit, postsPageNr)
      setActivePosts(posts)
    }
  }

  const handleShiftingPages = (change = 0) => {
    let pageNr = postsPageNr
    const max =
      postsLimit === 1
        ? Math.floor(data.length / postsLimit) - 1
        : Math.floor(data.length / postsLimit)
    if (change < 0 && postsPageNr > 0) {
      setpostsPageNr(postsPageNr + change)
      pageNr += change
    }
    if (change > 0 && postsPageNr < max) {
      setpostsPageNr(postsPageNr + change)
      pageNr += change
    }
    const posts = findActivePosts(data, activeTags, postsLimit, pageNr)
    setActivePosts(posts)
  }

  return (
    <>
      <section className={`${styles.section} ${styles.slider_wrap}`}>
        <MainSlider />
      </section>
      <Tags handleActiveTags={handleActiveTags} activeTags={activeTags}></Tags>
      <Articles
        activePosts={activePosts}
        activeTags={activeTags}
        className={styles.section}
      />
      <SwitchPages
        skip={postsPageNr}
        maxPage={maxPages}
        handleSkip={handleShiftingPages}
      />
    </>
  )
}

export default Content
