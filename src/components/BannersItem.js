import React from 'react'
import {Link} from 'react-router-dom'
import styles from 'components/BannersItem.module.scss'

function BannersItem({title, url}) {
  return (
    <li className={styles.component}>
      <Link className={styles.link} to={url}>
        <h2 className={styles.title}>{title}</h2>
      </Link>
    </li>
  )
}

export default BannersItem
