import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from 'components/Header.module.scss'

function Header() {
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
      </ul>
    </header>
  )
}

export default Header
