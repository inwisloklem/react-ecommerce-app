import React from 'react'
import BannersItem from 'components/BannersItem'
import styles from 'components/Banners.module.scss'
import uuid from 'utils/uuid'

const BANNERS = [
  {id: uuid(), title: 'Hats', url: '/hats'},
  {id: uuid(), title: 'Jackets', url: '/jackets'},
  {id: uuid(), title: 'Sneakers', url: '/sneakers'},
  {id: uuid(), title: 'Women', url: '/women'},
  {id: uuid(), title: 'Men', url: '/men'},
]

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
