import { useState, useEffect } from "react"
import ArticleCard from "./ArticleCard"
import Loading from "./Loading"
import { getArticles } from "../api"

function ArticlesList() {
    const [articlesList, setArticlesList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    

    useEffect(() => {
        setIsLoading(true)
        getArticles()
        .then((response) => {
            setArticlesList(response.data),
            setIsLoading(false)
        })
    }, [])

    if (isLoading) {
        return <Loading/>
    }

return(
    <section id="articles-list">
        <h1>Articles:</h1>
        <ul>
            {articlesList.map((article) => {
                return <ArticleCard key={article.article_id} article={ article }/>
            })}
        </ul>
    </section>
)
}

export default ArticlesList