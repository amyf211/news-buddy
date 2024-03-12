import { useState, useEffect } from "react"
import Loading from "./Loading"
import { getArticleById } from "../api"
import { Link } from "react-router-dom"

function Home() {
    const [featuredArticle, setFeaturedArticle] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        getArticleById(10).then((article) =>
        setFeaturedArticle(article),
        setIsLoading(false))
    }, [])

    if(isLoading) {
        return <Loading />
    }

    return(
        <section>
            <h2>Today's Featured Article:</h2>
            <Link to={`/articles/10`}><h3>{featuredArticle.title}</h3></Link>
            <p>By: {featuredArticle.author}</p>
            <img id="featured-article-img" src={featuredArticle.article_img_url} />
        </section>
        
    )
}

export default Home