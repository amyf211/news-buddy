import { useState, useEffect } from "react"
import ArticleCard from "./ArticleCard"
import Loading from "./Loading"

function ArticlesList() {
    const [articlesList, setArticlesList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    

    useEffect(() => {
        setIsLoading(true)
        fetch('https://newsbuddy-f5h1.onrender.com/api/articles')
        .then((response) => response.json())
        .then((data) => {
            setArticlesList(data),
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