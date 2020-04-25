import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {withRouter} from 'react-router-dom'
import {getCartItems, getIsDropdownHidden} from 'store/cartSelectors'
import {toggleCartDropdown} from 'store/actions'
import {CHECKOUT_PATHNAME} from 'config/constants'
import Button from 'components/Button'
import CartItem from 'components/CartItem'
import styles from 'components/CartDropdown.module.scss'

function CartDropdown({cartItems, history, isDropdownHidden, toggleCartDropdown}) {
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

      <ul className={styles.list}>
        {cartItems.map(item => (
          <CartItem key={item.id} {...item} />
        ))}
      </ul>

      <Button hasAccent onClick={handleGoToCheckout}>
        Go to checkout
      </Button>
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

const mapStateToProps = createStructuredSelector({
  cartItems: getCartItems,
  isDropdownHidden: getIsDropdownHidden,
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown))
