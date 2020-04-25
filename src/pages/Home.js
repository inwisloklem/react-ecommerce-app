import React from 'react'
import BANNERS from 'db/banners'
import BannersItem from 'components/BannersItem'
import List from 'components/List'
import styles from 'pages/Home.module.scss'

function Home() {
  return (
    <div className={styles.component}>
      <List className={styles.list} component={BannersItem} items={BANNERS} />
    </div>
  )
}

export default Home
