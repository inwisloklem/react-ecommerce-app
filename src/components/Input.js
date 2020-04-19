import React from 'react'
import styles from 'components/Input.module.scss'

function Input({label, name, type = 'text', value, onChange}) {
  return (
    <label className={styles.component}>
      <h3 className={styles.text}>{label}</h3>
      <input
        className={styles.input}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      />
    </label>
  )
}

export default Input
