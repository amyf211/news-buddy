import { useParams } from "react-router"
import { getArticleById } from "../api"
import { useState, useEffect } from "react"
import Loading from "./Loading"
import CommentsList from "./CommentsList"
import { Link } from "react-router-dom"
import { updateVotes } from "../api"

function SingleArticle() {
    const {article_id} = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [article, setArticle] = useState({})
    const [votes, setVotes] = useState(0)


    function handleLike(){
            setVotes((currVotes) => currVotes + 1)
            updateVotes(article_id, {inc_votes: 1})
            .catch((error) => {
                setVotes((currVotes) => currVotes - 1)
            })
    }

    function handleDislike(){
            setVotes((currVotes) => currVotes - 1)
            updateVotes(article_id, {inc_votes: -1})
            .catch((error) => {
                setVotes((currVotes) => currVotes + 1)
            })
    }

    useEffect(() => {
        setIsLoading(true)
        getArticleById(article_id).then((article) => {
            setArticle(article)
            setVotes(article.votes)
            setIsLoading(false)
        })
      
    }, [article_id])

    if(isLoading) {
        return <Loading />
    }

    return(
        <section id="single-article">
            <Link to={`/articles?topic=${article.topic}`}><p>{article.topic}</p></Link>
            <h1>{article.title}</h1>
            <h3>By: {article.author}</h3>
            <p>Posted: {String(article.created_at).slice(0,10)}</p>
            <img id="single-article-img" src={article.article_img_url} />
            <p>{article.body}</p>
            <div id="article-likes">
                <h3>Likes: {votes}</h3>
                <button className="buttons-style" onClick={() => handleLike()}> Like ❤️ </button>
                <button className="buttons-style" onClick={handleDislike}> Dislike 💔 </button>
            </div>
            <CommentsList article_id={article_id}/>
        </section>
    )
    
}

export default SingleArticle