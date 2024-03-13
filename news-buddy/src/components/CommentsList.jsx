import { useState, useEffect } from "react"
import CommentCard from "./CommentCard"
import Loading from "./Loading"
import { getComments } from "../api"

function CommentsList({ article_id }) {
    const [commentsList, setCommentsList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        getComments(article_id)
        .then((response) => {
            setCommentsList(response.data)
            setIsLoading(false)
        })
    }, [])

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