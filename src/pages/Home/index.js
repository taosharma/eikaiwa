import HomeBannerImage from "../../components/HomeBannerImage";
import Sidebar from "../../components/Sidebar";
import ArticleSummaryCard from "../../components/ArticleSummaryCard";
// import Tag from "../../components/Tag";
import Stack from "@mui/material/Stack";
import AvatarChips from "../../components/newTag";
import { Avatar } from "@mui/material";
import FeaturedSummaryCard from "../../components/FeaturedSummaryCard";
import NewspaperRoundedIcon from "@mui/icons-material/NewspaperRounded";
import ReduceCapacityRoundedIcon from "@mui/icons-material/ReduceCapacityRounded";
import LiveTvRoundedIcon from "@mui/icons-material/LiveTvRounded";
import ChildCareRoundedIcon from "@mui/icons-material/ChildCareRounded";
import WorkOutlineRoundedIcon from "@mui/icons-material/WorkOutlineRounded";
import LuggageRoundedIcon from "@mui/icons-material/LuggageRounded";

import styles from "./index.module.css";

const topics = ["News", "Culture", "Film & TV", "Kids", "Business", "Travel"];
const levels = ["Beginner", "Intermediate", "Advanced"];
const icons = [
  NewspaperRoundedIcon,
  ReduceCapacityRoundedIcon,
  LiveTvRoundedIcon,
  ChildCareRoundedIcon,
  WorkOutlineRoundedIcon,
  LuggageRoundedIcon,
];
const topicsAndIcons = {
  News: NewspaperRoundedIcon,
  Culture: ReduceCapacityRoundedIcon,
  "Film & TV": LiveTvRoundedIcon,
  Kids: ChildCareRoundedIcon,
  Business: WorkOutlineRoundedIcon,
  Travel: LuggageRoundedIcon,
};

export default function Home({ articles }) {
  const sx = {
    fontFamily: '"Poppins", "DroidSerif", "sans-serif"',
    padding: "17px",
    cursor: "pointer",
  };
  return (
    <>
      <HomeBannerImage />
      <main className={styles.mainContainer}>
        <section className={styles.contentContainer}>
          <div className={styles.levelsContainer}>
            <Stack direction="row" spacing={3}>
              {levels.map((level, i) => (
                <AvatarChips
                  size="medium"
                  text={level}
                  colour={"secondary"}
                  sx={{
                    ...sx,
                    backgroundColor: "var(--secondary-colour)",
                    "&:hover": { backgroundColor: "var(--primary-colour)" },
                  }}
                />
              ))}
            </Stack>
          </div>
          <div className={styles.topicsContainer}>
            <Stack direction="row" spacing={2}>
              {topics.map((topic) => (
                <div>
                  <AvatarChips
                    size="small"
                    text={topic}
                    colour={"primary"}
                    chipIcon={topicsAndIcons[topic]}
                    sx={{
                      ...sx,
                      backgroundColor: "var(--primary-colour)",
                      "&:hover": { backgroundColor: "var(--secondary-colour)" },
                    }}
                  />
                </div>
              ))}
            </Stack>
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
