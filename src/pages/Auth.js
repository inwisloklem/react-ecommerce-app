import React from 'react'
import cn from 'classnames'
import SignIn from 'components/SignIn'
import SignUp from 'components/SignUp'
import styles from 'pages/Auth.module.scss'

function Auth() {
  return (
    <div className={cn(styles.component, styles.hgap)}>
      <div className={styles.block}>
        <SignIn />
      </div>

      <div className={styles.block}>
        <SignUp />
      </div>
    </div>
  )
}

export default Auth
