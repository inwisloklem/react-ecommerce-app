import React from 'react'
import List from 'components/List'
import {MAX_PREVIEW_ITEMS} from 'config/constants'
import PreviewItem from 'components/PreviewItem'
import styles from 'components/ProductsItem.module.scss'

function ProductsItem({items, title}) {
  const cappedItems = items.filter((_, i) => i < MAX_PREVIEW_ITEMS)

  return (
    <li className={styles.component}>
      <h2 className={styles.title}>{title}</h2>
      <List className={styles.list} component={PreviewItem} items={cappedItems} />
    </li>
  )
}

export default ProductsItem
