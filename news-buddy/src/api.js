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
    return newsApi.post(`/articles/${article_id}/comments`, body).then((data) => {
        return data
    }).catch((err) => {
        console.log(err)
    })
}

export function deleteComment(comment_id){
    console.log('in the api function')
    return newsApi.delete(`/comments/${comment_id}`).then((response) => {
        console.log(response, 'response in api')
        console.log('post deleted')
        return response
    }).catch((err) => {
        console.log(err)
    })
}
 