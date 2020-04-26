import React from 'react'
import cn from 'classnames'
import styles from 'components/CheckoutHeader.module.scss'

function CheckoutHeader() {
  return (
    <ul className={cn(styles.header, styles.row)}>
      <li className={styles.title}>Description</li>
      <li className={styles.title}>Price</li>
      <li className={styles.title}>Quantity</li>
      <li className={styles.title}>Remove</li>
    </ul>
  )
}

export default CheckoutHeader
