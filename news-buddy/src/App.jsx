import './App.css'

import { Routes, Route } from "react-router-dom"
import { useState } from 'react'
import Home from "./components/Home"
import Header from "./components/Header"
import ArticlesList from "./components/ArticlesList"
import SingleArticle from './components/SingleArticle'
import TopicsList from './components/TopicsList'
import UserContext from './contexts/UserContext'

function App() {
  const [loggedInUser, setLoggedInUser] = useState({username: "grumpy19"})

  return (
    <UserContext.Provider value={{loggedInUser, setLoggedInUser}}>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/articles' element={<ArticlesList /> } />
        <Route path='/articles/:article_id' element={<SingleArticle />} />
        <Route path='/topics' element={<TopicsList /> } />
      </Routes>
    </UserContext.Provider>
  )
}

export default App
