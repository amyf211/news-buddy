const getArticleById = (article_id) => {
    return fetch(`https://newsbuddy-f5h1.onrender.com/api/articles/${article_id}`)
    .then((response) => {
        return response.json()
    }).then((data) => {
        return data
    })
}

export default getArticleById;