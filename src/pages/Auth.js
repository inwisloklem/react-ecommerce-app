import React from 'react'
import SignIn from 'components/SignIn'
import styles from 'pages/Auth.module.scss'

function Auth() {
  return (
    <div className={styles.component}>
      <SignIn />
    </div>
  )
}

export default Auth
