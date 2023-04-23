import React from 'react'

export const Item = ({id, description, price, image}) => {
  return (
    <div>
        <h3>ID: {id}</h3>
        <p>Descripción: {description}</p>
        <p>Precio: ${price}</p>
        <img src={image} alt={image} />
    </div>
  )
}
