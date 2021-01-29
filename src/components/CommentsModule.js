import React, { useState, useEffect } from "react"
import styles from "../styles/comments.module.css"

import Comment from "./comment"
import Loader from "../components/UI Elements/loading"
import Button from "../components/UI Elements/Button"
const fetchComments = async (postId = "") => {
  try {
    const comments = await fetch(
      `https://sebakoduje-blog-api.herokuapp.com/comments/${postId}`
    )

    return comments.json()
  } catch (error) {
    console.log(error)
    return ["error"]
  }
}
const sendComment = async (postId = "", comment = {}) => {
  const data = { ...comment, blogPostId: postId }
  console.log(JSON.stringify(data))

  try {
    const response = await fetch(
      `https://sebakoduje-blog-api.herokuapp.com/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
    if (response.status != 200) {
      console.log(response)
    }
    return response
  } catch (error) {
    console.log(error)
    return null
  }
}

const CommentsModule = ({ postId }) => {
  const [nameValue, setNameValue] = useState("")
  const [textValue, setTextValue] = useState("")
  const [comments, setComments] = useState([])
  const [fetchingState, setFetchingState] = useState("loading")
  const [config, setConfig] = useState({})
  const [sendingStatus, setSendingStatus] = useState("none")

  useEffect(() => {
    fetchComments(postId)
      .then(response => {
        setComments(response.comments)
        setConfig(response.configInfo)
        setFetchingState("ok")
      })
      .catch(e => {
        setFetchingState("error")
      })
  }, [])
  const handleInput = e => {
    const name = e.target.name
    const value = e.target.value
    switch (name) {
      case "userName":
        setNameValue(value)
        break
      case "commentText":
        setTextValue(value)
      default:
        break
    }
  }
  const handleSubmit = async e => {
    e.preventDefault()
    const comment = { text: textValue, author: nameValue }
    if (
      textValue.replace(/^\s+|\s+$|\s+(?=\s)/g, "") != "" &&
      nameValue.replace(/^\s+|\s+$|\s+(?=\s)/g, "") != ""
    ) {
      if (comments.length < config.maximumComments) {
        setSendingStatus("waiting")
        const response = await sendComment(postId, comment)
        if (response.ok) {
          fetchComments(postId).then(res => {
            setComments(res.comments)
            setTextValue("")
            setNameValue("")
            setSendingStatus("none")
          })
        } else {
          setSendingStatus("none")
          alert("coś poszło nie tak przy próbie pobrania komentarzy")
        }
      } else {
      }
    } else {
      alert("Musisz uzupełnić komentarz i podać nazwę!")
    }
  }
  return (
    <article className={styles.container}>
      {config.maximumComments > comments.length ? (
        <>
          <h3 className={styles.comments_intro}>Zostaw komentarz</h3>
          <form className={styles.form} action="">
            <label htmlFor="">Nazwa</label>
            <input
              onChange={handleInput}
              value={nameValue}
              className={styles.input}
              id="name"
              type="text"
              name="userName"
            />
            <label htmlFor="comment">Komentarz</label>
            <textarea
              onChange={handleInput}
              value={textValue}
              className={styles.text_area}
              maxLength={config.textLimit ? config.textLimit : 500}
              name="commentText"
              id="comment"
              cols="30"
              rows="10"
            ></textarea>
            <Button
              handleClick={handleSubmit}
              className={styles.btn}
              downClass={styles.down}
            >
              Wyślij
            </Button>
            {sendingStatus === "waiting" ? (
              <div className={styles.loader_wrap}>
                <Loader></Loader>
              </div>
            ) : null}
          </form>
        </>
      ) : (
        <div>
          <h3>Dodawanie komentarzy wyłączone</h3>
        </div>
      )}
      {fetchingState === "loading" ? (
        <Loader />
      ) : (
        <section className={styles.comments}>
          <h3>
            Komentarze <span>{comments.length}</span>
          </h3>
          {comments.map(item => (
            <Comment key={item._id} main={item} />
          ))}
        </section>
      )}
    </article>
  )
}
export default CommentsModule
