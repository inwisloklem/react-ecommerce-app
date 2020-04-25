import React from 'react'
import cn from 'classnames'
import {Link} from 'react-router-dom'
import styles from 'components/Button.module.scss'

function Button({children, hasAccent, linkTo, type = 'button', ...props}) {
  if (linkTo) {
    return (
      <Link
        className={cn(styles.component, hasAccent ? styles.accent : styles.basic)}
        to={linkTo}
        {...props}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      className={cn(styles.component, hasAccent ? styles.accent : styles.basic)}
      type={type}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
