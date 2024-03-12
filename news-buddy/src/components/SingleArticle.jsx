import { useParams } from "react-router"
import getArticleById from "../api"
import { useState, useEffect } from "react"
import Loading from "./Loading"

function SingleArticle({ isLoading, setIsLoading}) {
    const {article_id} = useParams()

    const [article, setArticle] = useState({})

    useEffect(() => {
        getArticleById(article_id).then((article) =>
        setArticle(article),
        setIsLoading(false))
    }, [article_id])

    if(isLoading) {
        return <Loading />
    }

    return(
        <section id="single-item">
            <p>{article.topic}</p>
            <h1>{article.title}</h1>
            <h3>By: {article.author}</h3>
            <p>Posted: {String(article.created_at).slice(0,10)}</p>
            <img id="single-article-img" src={article.article_img_url} />
            <p>{article.body}</p>
            <h3>Likes: {article.votes}</h3>
            <h3>Comments:</h3>
        </section>
    )
    
}

export default SingleArticle