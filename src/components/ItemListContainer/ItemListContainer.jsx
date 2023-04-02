import React from 'react'
import './itemListContainer.css'

export const ItemListContainer = (props) => {
  return (
    <div>
      <hr />
      <h2>{props.greeting}</h2>
    </div>
  )
}
