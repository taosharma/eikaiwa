import HomeBannerImage from "../../components/HomeBannerImage";
import Title from "../../components/Title";
import DescriptionText from "../../components/DescriptionText";
import Sidebar from "../../components/Sidebar";
import ArticleSummaryCard from "../../components/ArticleSummaryCard";

import styles from "./index.module.css";
import SecondaryTitle from "../../components/SecondaryTitle";
import FeaturedSummaryCard from "../../components/FeaturedSummaryCard";

export default function Home() {
  return (
    <>
      <HomeBannerImage />
      <main className={styles.mainContainer}>
        <section className={styles.contentContainer}>
          <Title titleText={"Welcome"} />
          <SecondaryTitle titleText={"日本語で英語を学ぼう"} />
          <DescriptionText />
          <FeaturedSummaryCard />
          <ArticleSummaryCard />
        </section>
        <section className={styles.sidebarContainer}>
          <Sidebar />
        </section>
      </main>
    </>
  );
}
