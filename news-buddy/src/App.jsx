import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Header from "./components/Header"
import ArticlesList from "./components/ArticlesList"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='/articles' element={<ArticlesList/> } />
        <Route path='/articles' element={<SingleArticle/> } />
      </Routes>
    </>
  )
}

export default App
