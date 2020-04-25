import React from 'react'
import ProductsItem from 'components/ProductsItem'
import styles from 'components/Products.module.scss'

function Products({items}) {
  return (
    <ul className={styles.component}>
      {items.map(({id, title, items}) => (
        <ProductsItem items={items} key={id} title={title} />
      ))}
    </ul>
  )
}

export default Products
