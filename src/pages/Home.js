import React from 'react'
import Banners from 'components/Banners'
import styles from 'pages/Home.module.scss'

function Home() {
  return (
    <div className={styles.component}>
      <Banners />
    </div>
  )
}

export default Home
