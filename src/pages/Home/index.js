import HomeBannerImage from '../../components/HomeBannerImage'
import Title from '../../components/Title'
import DescriptionText from '../../components/DescriptionText'
import Sidebar from '../../components/Sidebar'
import ArticleSummaryCard from '../../components/ArticleSummaryCard'

import styles from './index.module.css'

export default function Home() {
  return (
    <>
      <HomeBannerImage />
      <div className={styles.contentContainer}>
        <Sidebar caption={'Eikaiwa cafe'} />
        <div className={styles.welcomeBox}>
          <Title titleText={'Welcome'} />
          <DescriptionText
            textArray={[
              'Eikaiwa afternoon teaへようこそ！',
              '二人のイギリス人が作っていっる英語を勉強する人向けのサイトです。',
              '私達の理想像では、読者のみなさまがアフタヌーンティーを馳走しながら、英語も楽しむことです。心地よくて、マイペースで勉強しましょう！',
              'だって、英語ができれば、世界のみんなと会話ができます！',
            ]}
          />
        </div>
        <ArticleSummaryCard />
      </div>
    </>
  )
}
