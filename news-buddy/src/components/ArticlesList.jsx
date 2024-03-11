import { useState, useEffect } from "react"
import ArticleCard from "./ArticleCard"

function ArticlesList() {
    const [articlesList, setArticlesList] = useState([])

    useEffect(() => {
        fetch('https://newsbuddy-f5h1.onrender.com/api/articles')
        .then((response) => response.json())
        .then((data) => {
            setArticlesList(data)
        })
    })

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