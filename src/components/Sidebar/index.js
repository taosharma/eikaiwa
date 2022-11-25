import AboutSummary from '../AboutSummary'

import styles from './index.module.css'

export default function Sidebar() {
  return (
    <div className={styles.sidebarContentContainer}>
      <AboutSummary />
    </div>
  )
}
