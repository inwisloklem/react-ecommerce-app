import React from 'react'
import BANNERS from 'db/banners'
import Banners from 'components/Banners'
import styles from 'pages/Home.module.scss'

function Home() {
  return (
    <div className={styles.component}>
      <Banners items={BANNERS} />
    </div>
  )
}

export default Home
