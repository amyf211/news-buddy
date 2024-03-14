import { Link } from "react-router-dom"

function TopicCard(props) {
    const { topic } = props
    
    return (
        <section className="topic-card">
            <Link to={`/articles?topic=${topic.slug}`}><h2>{topic.slug}</h2></Link>
            <p>{topic.description}</p>
        </section>
    )
}

export default TopicCard