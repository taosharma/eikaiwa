import ImageBox from '../ImageBox'
import Tag from '../Tag'
import styles from './index.module.css'

export default function ArticleSummaryCard({
  image,
  englishTitle,
  date,
  japaneseTitle,
  summaryText,
  tags,
}) {
  return (
    <article className={styles.articleSummaryCard}>
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
  )
}

ArticleSummaryCard.defaultProps = {
  image:
    'https://i.pinimg.com/736x/ae/5a/44/ae5a44722fe1c7d670a298be25fc6d31--tea-sets-spaghetti-dinner.jpg',
  englishTitle: 'English Title',
  date: '1 January 2022',
  japaneseTitle: '日本語タイトル',
  summaryText: '今日私たちは英会話を話します。',
  tags: ['Beginner', 'Culture', 'Sports'],
}
