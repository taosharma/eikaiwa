import Home from "./pages/Home";
import Article from "./pages/Article";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import React, { useState } from "react";
import "./App.css";

import exampleArticles from "../src/data/dummyArticles.json";
// fetch all from dynamo
// set state to be list of articles

function App() {
  const [articles, setArticles] = useState(exampleArticles);
  const [currentArticle, setCurrentArticle] = useState(exampleArticles[0]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home articles={articles} />,
    },
    {
      path: "/article/:pageId",
      element: (
        <Article
          currentArticle={currentArticle}
          handleCurrentArticle={handleCurrentArticle}
        />
      ),
    },
  ]);

  function handleCurrentArticle(pageId) {
    const article = articles.find(({ id }) => id === pageId);
    if (article) {
      setCurrentArticle(article);
      window.scroll({
        top: 0,
        left: 0,
      });
    }
  }

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
