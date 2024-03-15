import { deleteComment } from "../api";
import UserContext from "../contexts/UserContext";
import { useContext, useState } from "react";

function CommentCard({ comment, CommentsList, setCommentsList }) {
  const { loggedInUser } = useContext(UserContext);
  const [isDeleting, setIsDeleting] = useState(false)

  function handleDelete(){
    const deletedCommentId = comment.comment_id
    setIsDeleting(true)
    deleteComment(comment.comment_id).then(() => {
      setIsDeleting(false)     
    })
  }

  return (
    <section className="comment-card">
      <h4>{comment.author}</h4>
      <p>Posted: {String(comment.created_at).slice(0, 10)}</p>
      <p>{comment.body}</p>
      <h4>Likes: {comment.votes}</h4>
      <button className="buttons-style"> Like ❤️ </button>
      <button className="buttons-style"> Dislike 💔 </button>
      {comment.author === loggedInUser.username ? (
        <button className="buttons-style" onClick={() => {handleDelete()}}> Delete </button>
      ) : null}
      {isDeleting? <p>Deleting...</p>: null}
    </section>
  );
}

export default CommentCard;
