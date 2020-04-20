import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {auth} from 'db/firebase'
import CartCount from 'components/CartCount'
import CartDropdown from 'components/CartDropdown'
import styles from 'components/Header.module.scss'

function Header({currentUser}) {
  const handleSignOut = () => {
    auth.signOut()
  }

  return (
    <header className={styles.component}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink className={styles.link} exact to='/'>
            <h2 className={styles.title}>Home</h2>
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink className={styles.link} exact to='/shop'>
            <h2 className={styles.title}>Shop</h2>
          </NavLink>
        </li>
        <li className={styles.item}>
          {currentUser ? (
            <div className={styles.link} onClick={handleSignOut}>
              <h2 className={styles.title}>Sign out</h2>
            </div>
          ) : (
            <NavLink className={styles.link} exact to='/signin'>
              <h2 className={styles.title}>Sign in</h2>
            </NavLink>
          )}
        </li>
        <li className={styles.last}>
          <CartCount />
        </li>
      </ul>

      <CartDropdown />
    </header>
  )
}

function mapStateToProps({user}) {
  return {
    currentUser: user.currentUser,
  }
}

export default connect(mapStateToProps)(Header)
