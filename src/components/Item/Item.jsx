import React from 'react'
import './item.css'
import {Card, Button} from 'react-bootstrap'

export const Item = ({id, description, price, image}) => {
  return (
        <Card className='tarjeta'>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>ID: {id}</Card.Title>
            <Card.Text>
            Descripción: {description}
            Precio: ${price}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      );
    }
