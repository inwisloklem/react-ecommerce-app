import React from 'react'
import BANNERS from 'db/banners'
import BannersItem from 'components/BannersItem'
import styles from 'components/Banners.module.scss'

function Banners() {
  return (
    <ul className={styles.component}>
      {BANNERS.map(({id, title, url}) => (
        <BannersItem key={id} title={title} url={url} />
      ))}
    </ul>
  )
}

export default Banners
