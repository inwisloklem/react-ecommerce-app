import React from 'react'
import PreviewItem from 'components/PreviewItem'
import styles from 'components/Preview.module.scss'

const MAX_PREVIEW_ITEMS = 4

function Preview({items}) {
  return (
    <ul className={styles.component}>
      {items.filter((_, i) => i < MAX_PREVIEW_ITEMS).map(item => (
        <PreviewItem key={item.id} {...item} />
      ))}
    </ul>
  )
}

export default Preview
