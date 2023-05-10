import React from 'react'
import './item.css'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Item = ({ id, name, description, price, image, category }) => {
  return (
    <Card className='tarjeta'>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Descripción: {description}
        </Card.Text>
        <Card.Text>
          Categoría: {category}
        </Card.Text>
        <Card.Text>
          Precio: US${price}
        </Card.Text>
        <Link to={`/detail/${id}`}>
          <Button variant="primary">Ver mas detalles</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
