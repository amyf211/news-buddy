function CommentCard(props) {
    const { comment } = props

    return (
        <section className="comment-card">
          <h4>{comment.author}</h4>
          <p>Posted: {String(comment.created_at).slice(0,10)}</p>
          <p>{comment.body}</p>
          <h4>Likes: {comment.votes}</h4>
        </section>
    )
}

export default CommentCard