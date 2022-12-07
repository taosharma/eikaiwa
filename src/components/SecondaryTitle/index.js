import styles from './index.module.css'

export default function SecondaryTitle({ titleText, textColor }) {
  return (
    <div>
      <h1 className={styles.secondarytitle} style={{ color: textColor }}>
        {titleText}
      </h1>
    </div>
  )
}
