import React from 'react'
import cn from 'classnames'
import {connect} from 'react-redux'
import {addItemToCart, clearItemFromCart, removeItemFromCart} from 'store/actions'
import Button from 'components/Button'
import styles from 'components/CheckoutItem.module.scss'

function CheckoutItem({addItemToCart, clearItemFromCart, removeItemFromCart, ...item}) {
  const {id, name, price, quantity} = item

  return (
    <ul className={styles.component}>
      <li className={styles.value}>{name}</li>
      <li className={styles.value}>{price}</li>
      <li className={cn(styles.value, styles.hgap)}>
        <Button className={styles.small} hasAccent onClick={() => removeItemFromCart(item)}>
          -
        </Button>
        <div className={styles.quantity}>{quantity}</div>
        <Button className={styles.small} hasAccent onClick={() => addItemToCart(item)}>
          +
        </Button>
      </li>
      <li className={styles.value}>
        <Button className={styles.small} hasAccent onClick={() => clearItemFromCart(id)}>
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
    clearItemFromCart(id) {
      dispatch(clearItemFromCart(id))
    },
    removeItemFromCart(item) {
      dispatch(removeItemFromCart(item))
    },
  }
}

export default connect(null, mapDispatchToProps)(CheckoutItem)
