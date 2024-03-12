import { Link } from "react-router-dom"

function ArticleCard(props) {
    const { article } = props
    
    return (
        <section className="article-card">
            <Link to={`/articles/${article.article_id}`}><h3>{article.title}</h3></Link>
            <img id="article_img" src={article.article_img_url} />
            <p>By: {article.author}</p>
            <p>Topic: {article.topic}</p>
        </section>
    )
}

export default ArticleCard