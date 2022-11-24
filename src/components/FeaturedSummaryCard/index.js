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
    "https://cdn.midjourney.com/50b1fc2e-b93a-4bdb-a72a-7c2832d3cb99/grid_0.png",
  englishTitle: "Wonderland Tea Party",
  date: "1 February 2022",
  japaneseTitle: "不思議の国のアリスのティーパーティー",
  summaryText:
    "ディズニーの不思議の国のアリスの有名なワンシーンです。アリスが悩みについて話しているけど、マッドハッター達が紅茶を入れたいです。繰り返しがたくさんあり、単語の簡単な楽しいシナリオです。 アフタヌーンティーを馳走しながら読んでみましょう。",
  tags: ["Intermediate", "Food", "Movies"],
};
