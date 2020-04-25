import React from 'react'
import cn from 'classnames'
import {connect} from 'react-redux'
import {toggleCartDropdown} from 'store/actions'
import styles from 'components/CartButton.module.scss'

function CartButton({toggleCartDropdown, quantity}) {
  const isEnabled = quantity > 0

  return (
    <button
      className={cn(styles.component, {[styles.pointer]: isEnabled})}
      type='button'
      onClick={isEnabled ? toggleCartDropdown : null}
    >
      Items in cart: {quantity}
    </button>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    toggleCartDropdown() {
      dispatch(toggleCartDropdown())
    },
  }
}

function mapStateToProps({cart: {cartItems}}) {
  return {
    quantity: cartItems.reduce((quantity, item) => {
      return quantity + item.quantity
    }, 0),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartButton)
