import styles from './index.module.css'
import classnames from 'classnames'

export default function Subtitle({ titleText, textColor, backgroundColour }) {
  return (
    <div>
      <h1
        className={classnames(styles['subtitle'], styles['backgroundColour'])}
        style={{ color: textColor }}
      >
        {titleText}
      </h1>
    </div>
  )
}

Subtitle.defaultProps = {
  titleText: 'Subtitle',
  textColor: 'black',
  backgroundColour: 'backgroundColour',
}
