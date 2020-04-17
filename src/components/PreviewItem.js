import React from 'react'
import styles from 'components/PreviewItem.module.scss'

function PreviewItem({name, price}) {
  return (
    <li className={styles.component}>
      <h3 className={styles.title}>
        {name}
      </h3>
      <span className={styles.price}>
        {price} coins
      </span>
    </li>
  )
}

export default PreviewItem
