import React from 'react'

function List({className, component: Item, items, onClick}) {
  return (
    <ul className={className}>
      {items.map(item => (
        <Item id={item.id} key={item.id} {...item} onClick={() => onClick(item)} />
      ))}
    </ul>
  )
}

export default List
