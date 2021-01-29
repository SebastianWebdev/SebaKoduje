import React from "react"
import Moment from "react-moment"
import styles from "../styles/comment.module.css"
const Comment = ({ main, subComments }) => {
  const date = new Date(main.date)
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h3>{main.author}</h3>
        <Moment locale="pl" format={"DD MMMM YYYY, HH:mm:ss"}>
          {main.date}
        </Moment>
      </div>

      <p className={styles.text}>{main.text}</p>
      {subComments ? (
        <div className="subComments">
          {subComments.map(comment => (
            <div key={comment._id}>
              <h3 className="subComment_author">{comment.author}</h3>
              <p>{comment.text}</p>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )
}
export default Comment
