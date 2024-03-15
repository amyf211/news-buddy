import { useState, useEffect } from "react"
import CommentCard from "./CommentCard"
import Loading from "./Loading"
import { getComments } from "../api"
import CommentForm from "./CommentForm"

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
        <CommentForm article_id={article_id} setCommentsList={setCommentsList}/>
        <ul>
            {commentsList.map((comment, index) => {
                return <CommentCard key={index} comment={comment} commentsList={commentsList} setCommentsList={setCommentsList}/>
            })}
        </ul>
    </section>
)

}

export default CommentsList