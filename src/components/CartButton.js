import React from 'react'
import cn from 'classnames'
import {connect} from 'react-redux'
import {getQuantity} from 'store/selectors'
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

function mapStateToProps(state) {
  return {
    quantity: getQuantity(state),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartButton)
