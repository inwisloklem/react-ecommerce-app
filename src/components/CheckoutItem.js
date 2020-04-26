import React from 'react'
import cn from 'classnames'
import Button from 'components/Button'
import styles from 'components/CheckoutItem.module.scss'

function CheckoutItem({name, price, quantity}) {
  return (
    <ul className={styles.component}>
      <li className={styles.value}>{name}</li>
      <li className={styles.value}>{price}</li>
      <li className={cn(styles.value, styles.hgap)}>
        <Button className={styles.small} hasAccent>
          -
        </Button>
        <span>{quantity}</span>
        <Button className={styles.small} hasAccent>
          +
        </Button>
      </li>
      <li className={styles.value}>
        <Button className={styles.small} hasAccent>
          X
        </Button>
      </li>
    </ul>
  )
}

export default CheckoutItem
