import HomeBannerImage from "../../components/HomeBannerImage";
import Sidebar from "../../components/Sidebar";
import ArticleSummaryCard from "../../components/ArticleSummaryCard";
import Tag from "../../components/Tag";
import Stack from "@mui/material/Stack";
import AvatarChips from "../../components/newTag";
import FeaturedSummaryCard from "../../components/FeaturedSummaryCard";

import styles from "./index.module.css";

const topics = ["News", "Culture", "Film & TV", "Kids", "Business", "Travel"];
const levels = ["Beginner", "Intermediate", "Advanced"];

export default function Home({ articles }) {
  return (
    <>
      <HomeBannerImage />
      <main className={styles.mainContainer}>
        <section className={styles.contentContainer}>
          <div className={styles.topicsContainer}>
            <Stack direction="row" spacing={2}>
              {topics.map((topic) => (
                <div>
                  {/* <Tag size={"big"} text={topic} /> */}
                  <AvatarChips text={topic} colour={"info"} />
                </div>
              ))}
            </Stack>
          </div>
          <div className={styles.levelsContainer}>
            {levels.map((level) => (
              <Tag size={"medium"} text={level} colour="secondary" />
            ))}
          </div>
          <FeaturedSummaryCard />
          {articles.map((article) => (
            <ArticleSummaryCard {...article} />
          ))}
        </section>
        <section className={styles.sidebarContainer}>
          <Sidebar />
        </section>
      </main>
    </>
  );
}
