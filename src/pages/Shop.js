import React from 'react'
import COLLECTIONS from 'db/collections'
import Products from 'components/Products'
import styles from 'pages/Shop.module.scss'

function Shop() {
  return (
    <div className={styles.component}>
      <Products items={COLLECTIONS} />
    </div>
  )
}

export default Shop
