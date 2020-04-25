import React from 'react'
import {connect} from 'react-redux'
import {toggleCartDropdown} from 'store/actions'
import Button from 'components/Button'
import CartItem from 'components/CartItem'
import styles from 'components/CartDropdown.module.scss'

function CartDropdown({cartItems, isDropdownHidden, toggleCartDropdown}) {
  return isDropdownHidden ? null : (
    <div className={styles.component}>
      <Button hasAccent onClick={toggleCartDropdown}>X</Button>

      <ul className={styles.list}>
        {cartItems.map(item => (
          <CartItem key={item.id} {...item} />
        ))}
      </ul>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    toggleCartDropdown() {
      dispatch(toggleCartDropdown())
    },
  }
}

function mapStateToProps({cart}) {
  return {
    cartItems: cart.cartItems,
    isDropdownHidden: cart.isDropdownHidden,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown)