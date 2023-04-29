import React, { useState, useContext } from 'react'
import { Card, Button } from 'react-bootstrap'
import './itemDetail.css'
import { useNavigate } from 'react-router-dom'
import { ItemCount } from '../ItemCount/ItemCount'
import { CartContext } from '../context/CartContext'


export const ItemDetail = ({ id, description, price, image, category, stock }) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1)
  }

  const { addToCart } = useContext(CartContext)

  const [counter, setCounter] = useState(0)

  const sumarAlCarrito = () => {
    const newItem = {
      id,
      description,
      image,
      price,
      category,
      counter
    }
    console.log(newItem);
    addToCart(newItem);
  }

  return (
    <Card className='tarjeta'>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>ID: {id}</Card.Title>
        <Card.Text>
          Descripción: {description}
        </Card.Text>
        <Card.Text>
          Categoría: {category}
        </Card.Text>
        <Card.Text>
          Precio: ${price}
        </Card.Text>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis illo laborum laudantium. A veniam quia perspiciatis, reprehenderit sunt unde officiis!</p>
        <ItemCount max={stock} modify={setCounter} cantidad={counter} />
        <Button onClick={sumarAlCarrito}>Agregar al carrito</Button>
      </Card.Body>
      <Button onClick={goBack} variant="primary">Volver atrás</Button>
    </Card>
  );
}
