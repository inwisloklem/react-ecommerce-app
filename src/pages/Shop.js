import React from 'react'
import Products from 'components/Products'
import styles from 'pages/Shop.module.scss'

function Shop() {
  return (
    <div className={styles.component}>
      <Products />
    </div>
  )
}

export default Shop
