import Home from './pages/Home'
import Article from './pages/Article'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import React, { useState, useEffect } from 'react'
import './App.css'

import exampleArticles from '../src/data/dummyArticles.json'

function App() {
  const [articles, setArticles] = useState([])
  const [currentArticle, setCurrentArticle] = useState({})

  async function getArticles() {
    const response = await fetch(
      'https://0ge6k9t4vf.execute-api.eu-west-1.amazonaws.com/dev/'
    )
    const articles = await response.json()
    setArticles(articles)
    setCurrentArticle(articles[0])
  }

  useEffect(() => {
    getArticles()
  }, [])

  function handleCurrentArticle(pageId) {
    const article = articles.find(({ id }) => id === pageId)
    // If there isn't an article we should show a 404 page!
    if (article) {
      setCurrentArticle(article)
      window.scroll({
        top: 0,
        left: 0,
      })
    }
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home articles={articles} />,
    },
    {
      path: '/article/:pageId',
      element: (
        <Article
          currentArticle={currentArticle}
          handleCurrentArticle={handleCurrentArticle}
        />
      ),
    },
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
