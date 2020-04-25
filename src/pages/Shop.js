import React from 'react'
import COLLECTIONS from 'db/collections'
import List from 'components/List'
import ProductsItem from 'components/ProductsItem'
import styles from 'pages/Shop.module.scss'

function Shop() {
  return (
    <div className={styles.component}>
      <List className={styles.list} component={ProductsItem} items={COLLECTIONS} />
    </div>
  )
}

export default Shop
