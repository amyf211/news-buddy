import { useState, useEffect } from "react"
import CommentCard from "./CommentCard"
import Loading from "./Loading"
import { getComments } from "../api"

function CommentsList({ article_id }) {
    const [commentsList, setCommentsList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getComments(article_id)
        .then((response) => {
            return response.json()})
        .then((data) => {
            setCommentsList(data)
            setIsLoading(false)
        })
    })

    if (isLoading) {
        return <Loading/>
    }

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