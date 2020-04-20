import React from 'react'
import {connect} from 'react-redux'
import {toggleCartDropdown} from 'store/actions'
import styles from 'components/CartCount.module.scss'

function CartCount({toggleCartDropdown}) {
  return (
    <button className={styles.component} type='button' onClick={toggleCartDropdown}>
      Items in cart: 0
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

export default connect(null, mapDispatchToProps)(CartCount)
