import React from 'react'
import styles from 'components/BannersItem.module.scss'

function BannersItem({title}) {
  return (
    <li className={styles.component}>
      <h2 className={styles.title}>{title}</h2>
    </li>
  )
}

export default BannersItem
