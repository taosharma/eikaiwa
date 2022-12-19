import AboutSummary from '../AboutSummary'
import SecondaryTitle from '../../components/SecondaryTitle'
import DescriptionText from '../../components/DescriptionText'

import styles from './index.module.css'

export default function Sidebar() {
  return (
    <div className={styles.sidebarContentContainer}>
      <div className={styles.welcomeTextContainer}>
        <SecondaryTitle titleText="Welcome" textColor={'white'} />
        <SecondaryTitle
          titleText={'日本語で英語を学ぼう'}
          textColor={'white'}
        />
        <DescriptionText textColor="white" />
      </div>
      <AboutSummary />
    </div>
  )
}
