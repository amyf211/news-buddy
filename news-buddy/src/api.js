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

export function getArticles(){
    return newsApi.get('/articles')}

export function getComments(article_id){
    return newsApi.get(`/articles/${article_id}/comments`)}

export function getTopics(){
    return newsApi.get(`/topics`)}