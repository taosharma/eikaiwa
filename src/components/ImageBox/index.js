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
  url: 'https://www.teasenz.it/media/catalog/product/cache/8a22e548d0d598b598d00db33d60f0d4/c/a/cat-teapot-16.jpg',
  alt: 'A teapot.',
}
