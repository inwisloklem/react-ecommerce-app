import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {withRouter} from 'react-router-dom'
import {CHECKOUT_PATHNAME} from 'config/constants'
import {getCartItems, getIsDropdownHidden, getQuantity} from 'store/cartSelectors'
import {removeItemFromCart, toggleCartDropdown} from 'store/actions'
import Button from 'components/Button'
import CartItem from 'components/CartItem'
import List from 'components/List'
import styles from 'components/CartDropdown.module.scss'

function CartDropdown({
  cartItems,
  history,
  isDropdownHidden,
  removeItemFromCart,
  toggleCartDropdown,
  quantity,
}) {
  const handleGoToCheckout = () => {
    toggleCartDropdown()

    const {pathname} = history.location
    if (!pathname.startsWith(CHECKOUT_PATHNAME)) {
      history.push(CHECKOUT_PATHNAME)
    }
  }

  return isDropdownHidden ? null : (
    <div className={styles.component}>
      <Button hasAccent onClick={toggleCartDropdown}>
        X
      </Button>

      <List
        className={styles.list}
        component={CartItem}
        items={cartItems}
        onClick={item => {
          if (!isDropdownHidden && quantity === 1) {
            toggleCartDropdown()
          }
          removeItemFromCart(item)
        }}
      />

      <Button hasAccent onClick={handleGoToCheckout}>
        Go to checkout
      </Button>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    removeItemFromCart(item) {
      dispatch(removeItemFromCart(item))
    },
    toggleCartDropdown() {
      dispatch(toggleCartDropdown())
    },
  }
}

const mapStateToProps = createStructuredSelector({
  cartItems: getCartItems,
  isDropdownHidden: getIsDropdownHidden,
  quantity: getQuantity,
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown))
