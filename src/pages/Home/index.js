import HomeBannerImage from '../../components/HomeBannerImage'
import Sidebar from '../../components/Sidebar'
import ArticleSummaryCard from '../../components/ArticleSummaryCard'
import Tag from '../../components/Tag'
import FeaturedSummaryCard from '../../components/FeaturedSummaryCard'

import styles from './index.module.css'

const topics = ['News', 'Culture', 'Film & TV', 'Kids', 'Business', 'Travel']
const levels = ['Beginner', 'Intermediate', 'Advanced']

export async function loader() {
  // const contacts = await getContacts();
  // return { contacts };
  return 1
}

export default function Home() {
  return (
    <>
      <HomeBannerImage />
      <main className={styles.mainContainer}>
        <section className={styles.contentContainer}>
          <div className={styles.topicsContainer}>
            {topics.map((topic) => (
              <Tag size={'big'} text={topic} />
            ))}
          </div>
          <div className={styles.levelsContainer}>
            {levels.map((level) => (
              <Tag size={'medium'} text={level} colour="secondary" />
            ))}
          </div>
          <FeaturedSummaryCard />
          {[1, 2, 3].map((article) => (
            <ArticleSummaryCard />
          ))}
        </section>
        <section className={styles.sidebarContainer}>
          <Sidebar />
        </section>
      </main>
    </>
  )
}
