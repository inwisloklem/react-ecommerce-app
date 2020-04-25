import React from 'react'
import {connect} from 'react-redux'
import {addItemToCart} from 'store/actions'
import styles from 'components/PreviewItem.module.scss'

function PreviewItem({addItemToCart, ...item}) {
  const {name, price} = item

  return (
    <li className={styles.component} onClick={() => addItemToCart(item)}>
      <h3 className={styles.title}>
        {name}
      </h3>
      <span className={styles.price}>
        {price} coins
      </span>
    </li>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    addItemToCart(item) {
      dispatch(addItemToCart(item))
    },
  }
}

export default connect(null, mapDispatchToProps)(PreviewItem)
