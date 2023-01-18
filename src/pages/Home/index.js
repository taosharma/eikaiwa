import React, { useEffect, useState } from "react";
import HomeBannerImage from "../../components/HomeBannerImage";
import Sidebar from "../../components/Sidebar";
import ArticleSummaryCard from "../../components/ArticleSummaryCard";
import Tag from "../../components/Tag";
import FeaturedSummaryCard from "../../components/FeaturedSummaryCard";

import styles from "./index.module.css";
import { Link } from "react-router-dom";

const topics = ["News", "Culture", "Film & TV", "Kids", "Business", "Travel"];
const levels = ["Beginner", "Intermediate", "Advanced"];

export default function Home({ articles }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [featuredArticle, setFeaturedArticle] = useState(null);

  function checkArticleCategories(categoriesArray) {
    // (({ id }) => id === pageId)
    // if (article) {
    //   setCurrentArticle(article)
  }

  useEffect(() => {
    console.log(selectedCategory, selectedLevel);
  }, [selectedCategory, selectedLevel]);

  return (
    <>
      <HomeBannerImage />
      <main className={styles.mainContainer}>
        <section className={styles.contentContainer}>
          <div className={styles.topicsContainer}>
            {topics.map((topic) => (
              <div onClick={() => setSelectedCategory(topic)}>
                <Tag size={"big"} text={topic} />
              </div>
            ))}
          </div>
          <div className={styles.levelsContainer}>
            {levels.map((level) => (
              <div onClick={() => setSelectedLevel(level)}>
                <Tag
                  size={"medium"}
                  text={level}
                  colour="secondary"
                  onClick={() => setSelectedLevel(level)}
                />
              </div>
            ))}
          </div>
          <Link
            to={`/article/${articles.id}`}
            style={{ textDecoration: "none" }}
          >
            <FeaturedSummaryCard />
          </Link>
          {articles.map((article) => (
            <Link
              to={`/article/${article.id}`}
              style={{ textDecoration: "none" }}
            >
              <ArticleSummaryCard {...article} key={article.id} />
            </Link>
          ))}
        </section>
        <section className={styles.sidebarContainer}>
          <Sidebar />
        </section>
      </main>
    </>
  );
}
