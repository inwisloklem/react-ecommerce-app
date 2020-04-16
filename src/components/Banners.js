import React from 'react'
import BannersItem from 'components/BannersItem'
import styles from 'components/Banners.module.scss'

function Banners() {
  return (
    <ul className={styles.component}>
      <BannersItem title='Hats' />
      <BannersItem title='Jackets' />
      <BannersItem title='Sneakers' />
      <BannersItem title='Women' />
      <BannersItem title='Men' />
    </ul>
  )
}

export default Banners
