import React from 'react'
import {connect} from 'react-redux'
import Button from 'components/Button'
import styles from 'components/CartDropdown.module.scss'

function CartDropdown({isDropdownHidden}) {
  return isDropdownHidden ? null : (
    <div className={styles.component}>
      <Button>To checkout</Button>
    </div>
  )
}

function mapStateToProps({cart}) {
  return {
    isDropdownHidden: cart.isDropdownHidden,
  }
}

export default connect(mapStateToProps)(CartDropdown)
