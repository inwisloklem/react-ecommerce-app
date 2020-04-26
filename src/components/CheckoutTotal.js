import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {getTotal} from 'store/cartSelectors'
import styles from 'components/CheckoutTotal.module.scss'

function CheckoutTotal({total}) {
  return (
    <div className={styles.component}>
      <div className={styles.total}>
        Total: {total}
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  total: getTotal,
})

export default connect(mapStateToProps)(CheckoutTotal)
