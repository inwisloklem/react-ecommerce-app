import React from 'react'
import cn from 'classnames'
import {connect} from 'react-redux'
import {addItemToCart, removeItemFromCart} from 'store/actions'
import Button from 'components/Button'
import styles from 'components/CheckoutItem.module.scss'

function CheckoutItem({addItemToCart, removeItemFromCart, ...item}) {
  const {name, price, quantity} = item

  return (
    <ul className={styles.component}>
      <li className={styles.value}>{name}</li>
      <li className={styles.value}>{price}</li>
      <li className={cn(styles.value, styles.hgap)}>
        <Button className={styles.small} hasAccent onClick={() => removeItemFromCart(item)}>
          -
        </Button>
        <span>{quantity}</span>
        <Button className={styles.small} hasAccent onClick={() => addItemToCart(item)}>
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

function mapDispatchToProps(dispatch) {
  return {
    addItemToCart(item) {
      dispatch(addItemToCart(item))
    },
    removeItemFromCart(item) {
      dispatch(removeItemFromCart(item))
    },
  }
}

export default connect(null, mapDispatchToProps)(CheckoutItem)
