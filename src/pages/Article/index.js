import ArticleBannerImage from "../../components/ArticleBannerImage";
import DescriptionText from "../../components/DescriptionText";
import Sidebar from "../../components/Sidebar";
import styles from "./index.module.css";

// const topics = ["News", "Culture", "Film & TV", "Kids", "Business", "Travel"];
// const levels = ["Beginner", "Intermediate", "Advanced"];

export default function Article({
  titleText,
  japaneseTitleText,
  articleDescription,
}) {
  return (
    <>
      <ArticleBannerImage
        titleText={titleText}
        titleTextColour={"white"}
        secondaryTitleText={japaneseTitleText}
        secondaryTitleTextColour={"white"}
      />
      <main className={styles.mainContainer}>
        <section className={styles.contentContainer}>
          <DescriptionText textArray={articleDescription} />
        </section>
        <section className={styles.sidebarContainer}>
          <Sidebar />
        </section>
      </main>
    </>
  );
}

Article.defaultProps = {
  titleText: "What is afternoon tea?",
  japaneseTitleText: "アフタヌーンティーを聞いたことがありますか。",
  image:
    "https://cdn.midjourney.com/c05c5184-a124-4db2-8ecd-742b4b06ce7f/grid_0.png",
  articleDescription: [
    "アフタヌーンティーについて聞いたことがありますか？イギリスで生まれた習慣で、今は世界中で楽しめる軽食です。アフタヌーンティーでは、お気に入りの紅茶（コーヒでも大丈夫）、ケーキ、サンドイッチ、スコーンなどが提供されます。。",
    "この記事を読んだら、アフタヌーンティーの由来、内容、詳しいことがわかります。みなさんはアフタヌーンティーをしたことがありますか？",
  ],
};
