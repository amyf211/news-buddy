import { useParams } from "react-router"
import { getArticleById } from "../api"
import { useState, useEffect } from "react"
import Loading from "./Loading"
import CommentsList from "./CommentsList"

function SingleArticle() {
    const {article_id} = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [article, setArticle] = useState({})
    const [newVotes, setNewVotes] = useState(article.votes)

    useEffect(() => {
        setIsLoading(true)
        getArticleById(article_id).then((article) =>
        setArticle(article),
        setIsLoading(false))
    }, [article_id])

    if(isLoading) {
        return <Loading />
    }

    return(
        <section id="single-article">
            <p>{article.topic}</p>
            <h1>{article.title}</h1>
            <h3>By: {article.author}</h3>
            <p>Posted: {String(article.created_at).slice(0,10)}</p>
            <img id="single-article-img" src={article.article_img_url} />
            <p>{article.body}</p>
            <div id="article-likes">
                <h3>Likes: {newVotes}</h3>
                <button className="like-buttons"> Like ❤️ </button>
                <button className="like-buttons"> Dislike 💔 </button>
            </div>
            <CommentsList article_id={article_id}/>
        </section>
    )
    
}

export default SingleArticle