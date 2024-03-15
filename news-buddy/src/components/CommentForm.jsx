import { useState } from "react"
import { postComment } from "../api"
import UserContext from "../contexts/UserContext"
import { useContext } from "react"

function CommentForm({ article_id, commentsList, setCommentsList }) {
    const { loggedInUser } = useContext(UserContext)
    const[formBody, setFormBody] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    function handleSubmit(event){
        event.preventDefault()
        const newComment = {username: loggedInUser.username,
            body: formBody}

            setIsLoading(true)

            postComment(article_id, newComment).then((response) => {
                console.log(response.data.newComment, 'data')
                setCommentsList((currComments) => {
                    return [response.data.newComment, ...currComments]})
                    setFormBody("")
                    setIsLoading(false)
            })
    }


    return (
        <form className="comment-form" onSubmit={handleSubmit}>

            <h4>Posting Comment As: {loggedInUser.username}</h4>

            <label htmlFor="comment-body">Comment:</label>
            <input required value={formBody} type="text" id="comment-body" onChange={(event) => {
            setFormBody(event.target.value)}}></input>

            <button disabled={isLoading} type="submit" className="buttons-style">Post Comment</button>

            {isLoading? <p>Posting...</p>: null}
        </form>
    )
}

export default CommentForm