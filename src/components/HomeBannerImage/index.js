import styles from './index.module.css'
import Title from '../Title'
import SecondaryTitle from '../SecondaryTitle'
import Subtitle from '../Subtitle'
// import { Link } from "react-router-dom";

export default function HomeBannerImage() {
  return (
    <>
      <div className={styles.heroImage}>
        <div className={styles.titlesContainer}>
          <div className={styles.heroTextContainer}>
            <Title titleText="Learn English" textColor={'black'} />
            <SecondaryTitle
              titleText="Over afternoon tea"
              textColor={'black'}
            />
          </div>
          <div className={styles.subtitleContainer}>
            <Subtitle
              titleText="毎日少しずつ英語を楽しもう"
              textColor={'black'}
            />
          </div>
        </div>
        <div className={styles.sidebarContainer}></div>
      </div>
    </>
  )
}
