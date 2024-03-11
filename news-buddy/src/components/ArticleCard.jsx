function ArticleCard(props) {
    const { article } = props
    
    return (
        <section className="article-card">
            <h3>{article.title}</h3>
            <img id="article_img" src={article.article_img_url} />
            <p>By: {article.author}</p>
            <p>Topic: {article.topic}</p>
        </section>
    )
}

export default ArticleCard