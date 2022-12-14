import styles from './index.module.css'

export default function Title({ titleText, textColor }) {
  return (
    <div>
      <h1 className={styles.title} style={{ color: textColor }}>
        {titleText}
      </h1>
    </div>
  )
}

Title.defaultProps = {
  titleText: 'Some Title',
  textColor: 'black',
}
