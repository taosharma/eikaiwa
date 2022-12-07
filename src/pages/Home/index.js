import HomeBannerImage from "../../components/HomeBannerImage";
import DescriptionText from "../../components/DescriptionText";
import Sidebar from "../../components/Sidebar";
import ArticleSummaryCard from "../../components/ArticleSummaryCard";
import Tag from "../../components/Tag";
import SecondaryTitle from "../../components/SecondaryTitle";
import FeaturedSummaryCard from "../../components/FeaturedSummaryCard";
import Article from "../Article";

import styles from "./index.module.css";

const topics = ["News", "Culture", "Film & TV", "Kids", "Business", "Travel"];
const levels = ["Beginner", "Intermediate", "Advanced"];

export default function Home() {
  return (
    <>
      {/* <HomeBannerImage />
      <main className={styles.mainContainer}>
        <section className={styles.contentContainer}>
          <SecondaryTitle titleText="Welcome" textColor={"black"} />
          <SecondaryTitle titleText={"日本語で英語を学ぼう"} />
          <DescriptionText />

          <div className={styles.topicsContainer}>
            {topics.map((topic) => (
              <Tag size={"big"} text={topic} />
            ))}
          </div>
          <div className={styles.levelsContainer}>
            {levels.map((level) => (
              <Tag size={"medium"} text={level} />
            ))}
          </div>
          <FeaturedSummaryCard />
          <ArticleSummaryCard />
        </section>
        <section className={styles.sidebarContainer}>
          <Sidebar />
        </section>
      </main> */}
      <Article />
    </>
  );
}
