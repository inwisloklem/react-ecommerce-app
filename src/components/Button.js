import React from 'react'
import cn from 'classnames'
import styles from 'components/Button.module.scss'

function Button({children, hasAccent, type = 'button', ...props}) {
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
