import ImageBox from "../ImageBox";
import Tag from "../Tag";
import styles from "./index.module.css";

export default function FeaturedSummaryCard({
  image,
  englishTitle,
  date,
  japaneseTitle,
  summaryText,
  tags,
}) {
  return (
    <article className={styles.featuredSummaryCard}>
      <ImageBox url={image} />
      <section className={styles.summaryContainer}>
        <h3 className={styles.englishTitle}>{englishTitle}</h3>
        <h4 className={styles.date}>{date}</h4>
        <h4 className={styles.japaneseTitle}>{japaneseTitle}</h4>
        <p className={styles.summaryText}>{summaryText}</p>
        <div className={styles.tagContainer}>
          {tags.map((tag) => (
            <Tag text={tag} />
          ))}
        </div>
      </section>
    </article>
  );
}

FeaturedSummaryCard.defaultProps = {
  image:
    "https://www.teasenz.it/media/catalog/product/cache/8a22e548d0d598b598d00db33d60f0d4/c/a/cat-teapot-16.jpg",
  englishTitle: "English Title",
  date: "1 January 2022",
  japaneseTitle: "日本語タイトル",
  summaryText: "今日私たちは英会話を話します。",
  tags: ["Beginner", "Culture", "Sports"],
};
