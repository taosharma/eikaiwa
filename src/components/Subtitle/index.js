import styles from './index.module.css'
import classnames from 'classnames'

export default function Subtitle({ titleText, textColor, backgroundColour }) {
  return (
    <>
      <h1
        className={classnames(styles['subtitle'], styles['backgroundColour'])}
        style={{ color: textColor }}
      >
        {titleText}
      </h1>
    </>
  )
}

Subtitle.defaultProps = {
  titleText: 'Subtitle',
  textColor: 'black',
  backgroundColour: 'backgroundColour',
}
