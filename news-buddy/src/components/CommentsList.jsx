import { useState, useEffect } from "react"
import CommentCard from "./CommentCard"
import Loading from "./Loading"

function CommentsList({ article_id }) {
    const [commentsList, setCommentsList] = useState([])

    useEffect(() => {
        fetch(`https://newsbuddy-f5h1.onrender.com/api/articles/${article_id}/comments`)
        .then((response) => response.json())
        .then((data) => {
            setCommentsList(data)
        })
    })

return(
    <section id="comments-list">
        <h3>Comments:</h3>
        <ul>
            {commentsList.map((comment) => {
                return <CommentCard key={comment.comment_id} comment={ comment }/>
            })}
        </ul>
    </section>
)

}

export default CommentsList