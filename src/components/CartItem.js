import React from 'react'
import styles from 'components/CartItem.module.scss'

function CartItem({name, price, quantity}) {
  return (
    <li className={styles.component}>
      <span className={styles.price}>
        {price}x{quantity}
      </span>
      <h2 className={styles.title}>{name}</h2>
    </li>
  )
}

export default CartItem
