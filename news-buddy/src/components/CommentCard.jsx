import UserContext from "../contexts/UserContext"
import { useContext } from "react"

function CommentCard({ comment }) {
  const { loggedInUser } = useContext(UserContext)

    return (
        <section className="comment-card">
          <h4>{comment.author}</h4>
          <p>Posted: {String(comment.created_at).slice(0,10)}</p>
          <p>{comment.body}</p>
          <h4>Likes: {comment.votes}</h4>
          <button className="buttons-style"> Like ❤️ </button>
          <button className="buttons-style"> Dislike 💔 </button>
        </section>
    )
}

export default CommentCard