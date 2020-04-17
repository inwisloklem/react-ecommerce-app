import React from 'react'
import COLLECTIONS from 'db/collections'
import ProductsItem from 'components/ProductsItem'
import styles from 'components/Products.module.scss'

function Products() {
  return (
    <ul className={styles.component}>
      {COLLECTIONS.map(({id, title, items}) => (
        <ProductsItem items={items} key={id} title={title} />
      ))}
    </ul>
  )
}

export default Products
