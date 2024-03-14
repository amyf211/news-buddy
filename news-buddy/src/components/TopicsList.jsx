import { useState, useEffect } from "react"
import TopicCard from "./TopicCard"
import Loading from "./Loading"
import { getTopics } from "../api"

function TopicsList() {
    const [topicsList, setTopicsList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    

    useEffect(() => {
        setIsLoading(true)
        getTopics()
        .then((response) => {
            setTopicsList(response.data),
            setIsLoading(false)
        })
    }, [])

    if (isLoading) {
        return <Loading/>
    }

return(
    <section id="topics-list">
        <h1>Topics:</h1>
        <ul>
            {topicsList.map((topic) => {
                return <TopicCard key={topic.slug} topic={ topic }/>
            })}
        </ul>
    </section>
)
}

export default TopicsList