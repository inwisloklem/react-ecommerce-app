import React from 'react'
import cn from 'classnames'
import styles from 'components/Button.module.scss'

function Button({children, hasAccent, type = 'button', onClick}) {
  return (
    <button
      className={cn(styles.component, hasAccent ? styles.accent : styles.basic)}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
