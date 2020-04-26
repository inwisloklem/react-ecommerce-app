import React from 'react'

function List({className, component: Item, items}) {
  return (
    <ul className={className}>
      {items.map(item => (
        <Item id={item.id} key={item.id} {...item} />
      ))}
    </ul>
  )
}

export default List
