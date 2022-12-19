import classnames from 'classnames'
import styles from './index.module.css'

export default function ImageBox({ size, url, alt }) {
  return (
    <div className={classnames(styles[size])}>
      <img src={url} alt={alt} className={styles.img} />
    </div>
  )
}

ImageBox.defaultProps = {
  size: 'small',
  url: 'https://i.pinimg.com/736x/ae/5a/44/ae5a44722fe1c7d670a298be25fc6d31--tea-sets-spaghetti-dinner.jpg',
  alt: 'A teapot.',
}
