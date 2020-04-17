import React from 'react'
import Preview from 'components/Preview'
import styles from 'components/ProductsItem.module.scss'

function ProductsItem({items, title}) {
  return (
    <li className={styles.component}>
      <h2 className={styles.title}>{title}</h2>
      <Preview items={items} />
    </li>
  )
}

export default ProductsItem
