import React from 'react'
import BannersItem from 'components/BannersItem'
import styles from 'components/Banners.module.scss'

function Banners({items}) {
  return (
    <ul className={styles.component}>
      {items.map(({id, title, url}) => (
        <BannersItem key={id} title={title} url={url} />
      ))}
    </ul>
  )
}

export default Banners
