import React from 'react'
import cn from 'classnames'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {getQuantity} from 'store/cartSelectors'
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

const mapStateToProps = createStructuredSelector({
  quantity: getQuantity,
})

export default connect(mapStateToProps, mapDispatchToProps)(CartButton)
