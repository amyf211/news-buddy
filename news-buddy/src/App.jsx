import './App.css'

import { Routes, Route } from "react-router-dom"
import { useState } from 'react'

import Home from "./components/Home"
import Header from "./components/Header"
import ArticlesList from "./components/ArticlesList"
import SingleArticle from './components/SingleArticle'
import TopicsList from './components/TopicsList'


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/articles' element={<ArticlesList /> } />
        <Route path='/articles/:article_id' element={<SingleArticle />} />
        <Route path='/topics' element={<TopicsList /> } />
      </Routes>
    </>
  )
}

export default App
