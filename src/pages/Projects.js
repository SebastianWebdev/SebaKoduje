import React, { useState } from "react"
import Layout from "../layout/layout"

import Tags from "../components/Tags"
const Projects = props => {
  const [activeTags, setActiveTags] = useState([])

  //handlers
  const handleActiveTags = TagName => {
    if (TagName === "Clear all") {
      setActiveTags([])
      //setActivePosts(findActivePosts(data, [], postsLimit, postsPageNr))
    } else {
      const tags = [...activeTags]
      const index = tags.indexOf(TagName)
      if (index < 0) {
        tags.push(TagName)
      } else {
        tags.splice(index, 1)
      }
      setActiveTags(tags)
      /*const posts = findActivePosts(data, tags, postsLimit, postsPageNr)
      setActivePosts(posts)*/
    }
  }
  return (
    <Layout>
      <h1>Projekty</h1>
      <Tags handleActiveTags={handleActiveTags} activeTags={activeTags} />
    </Layout>
  )
}
export default Projects
