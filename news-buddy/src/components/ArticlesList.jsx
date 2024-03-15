import { useState, useEffect } from "react"
import ArticleCard from "./ArticleCard"
import Loading from "./Loading"
import { getArticles } from "../api"
import { useSearchParams } from "react-router-dom"

function ArticlesList() {
    const [articlesList, setArticlesList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const [searchParams] = useSearchParams()
    const topic = searchParams.get('topic')


    useEffect(() => {
        setIsLoading(true)
        getArticles(topic)
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
            {articlesList.map((article, index) => {
                return <ArticleCard key={index} article={ article }/>
            })}
        </ul>
    </section>
)
}

export default ArticlesList