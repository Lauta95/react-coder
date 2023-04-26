import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './itemDetail.css'
import { useNavigate } from 'react-router-dom'
import { ItemCount } from '../ItemCount/ItemCount'

export const ItemDetail = ({ id, description, price, image, category }) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1)
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
        <ItemCount/>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
        <Button onClick={goBack} variant="primary">Volver atrás</Button>
    </Card>
  );
}
