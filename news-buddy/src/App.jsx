import './App.css'

import { Routes, Route } from "react-router-dom"
import { useState } from 'react'

import Home from "./components/Home"
import Header from "./components/Header"
import ArticlesList from "./components/ArticlesList"
import SingleArticle from './components/SingleArticle'


function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/articles' element={<ArticlesList isLoading={isLoading} setIsLoading={setIsLoading}/> } />
        <Route path='/articles/:article_id' element={<SingleArticle isLoading={isLoading} setIsLoading={setIsLoading}/>} />
      </Routes>
    </>
  )
}

export default App
