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
    return newsApi.get('/articles')
}

export function getComments(article_id){
    return newsApi.get(`/articles/${article_id}/comments`)}

export function updateVotes(article_id, body){
    return newsApi.patch(`/articles/${article_id}`, body).then((data) => {
        return data
    })
} 

export function postComment(article_id, body){
    console.log(article_id)
    console.log(body)
    return newsApi.post(`/articles/${article_id}/comments`, body).then((data) => {
        return data
    }).catch((err) => {
        console.log(err)
    })
}
 