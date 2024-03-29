import axios from "axios"

const newsApi = axios.create({
    baseURL: 'https://newsbuddy-f5h1.onrender.com/api'
})

export function getArticleById(article_id) {
    return newsApi.get(`/articles/${article_id}`)
    .then((response) => {
        return response.data
    })
}

export function getArticles(topic){
    let url = `/articles`
    if(topic){
        url += `?topic=${topic}`
    }
    return newsApi.get(url)}

export function getComments(article_id){
    return newsApi.get(`/articles/${article_id}/comments`)}

export function updateVotes(article_id, body){
    return newsApi.patch(`/articles/${article_id}`, body).then((data) => {
        return data
    })
} 

export function postComment(article_id, body){
    return newsApi.post(`/articles/${article_id}/comments`, body).then((data) => {
        return data
    }).catch((err) => {
        console.log(err)
    })
}

export function deleteComment(comment_id){
    return newsApi.delete(`/comments/${comment_id}`).then((response) => {
        return response
    }).catch((err) => {
        console.log(err)
    })
}

export function getTopics(){
    return newsApi.get(`/topics`)}