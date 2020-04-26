import React from 'react'
import cn from 'classnames'
import {Link} from 'react-router-dom'
import styles from 'components/Button.module.scss'

function Button({className, children, hasAccent, linkTo, type = 'button', ...props}) {
  if (linkTo) {
    return (
      <Link
        className={cn(styles.component, hasAccent ? styles.accent : styles.basic, className)}
        to={linkTo}
        {...props}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      className={cn(styles.component, hasAccent ? styles.accent : styles.basic, className)}
      type={type}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
