import classnames from 'classnames'
import styles from './index.module.css'

export default function Tag({ size, colour, text }) {
  return (
    <div className={classnames(styles[size], styles[colour], styles['tag'])}>
      <p className={styles.tagText}>{text}</p>
    </div>
  )
}

Tag.defaultProps = {
  size: 'small',
  colour: 'red',
  text: 'tag',
}
