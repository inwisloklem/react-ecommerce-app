import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {getCartItems} from 'store/cartSelectors'
import CheckoutHeader from 'components/CheckoutHeader'
import CheckoutItem from 'components/CheckoutItem'
import CheckoutTotal from 'components/CheckoutTotal'
import List from 'components/List'
import styles from 'pages/Checkout.module.scss'

function Checkout({cartItems}) {
  return (
    <div className={styles.component}>
      <CheckoutHeader />
      <List component={CheckoutItem} items={cartItems} />
      <CheckoutTotal />
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: getCartItems,
})

export default connect(mapStateToProps)(Checkout)
