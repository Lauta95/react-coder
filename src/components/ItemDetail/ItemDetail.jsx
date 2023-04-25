import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './itemDetail.css'

export const ItemDetail = ({ id, description, price, image, category }) => {
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
          <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
  );
}
