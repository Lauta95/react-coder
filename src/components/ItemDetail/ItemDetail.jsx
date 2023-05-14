import React, { useState, useContext } from 'react'
import { Card, Button } from 'react-bootstrap'
import './itemDetail.css'
import { useNavigate } from 'react-router-dom'
import { ItemCount } from '../ItemCount/ItemCount'
import { CartContext } from '../context/CartContext'
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'

export const ItemDetail = ({ id, name, description, price, image, category, stock }) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1)
  }

  const { addToCart } = useContext(CartContext)

  const [counter, setCounter] = useState(0)

  const sumarAlCarrito = () => {
    const newItem = {
      id,
      name,
      description,
      image,
      price,
      category,
      counter
    }
    console.log(newItem);
    addToCart(newItem);
    Swal.fire({
      position: 'middle',
      icon: 'success',
      title: 'Juego agregado al carrito',
      showConfirmButton: false,
      timer: 750
    })
  }

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
          Precio: ${price}
        </Card.Text>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis illo laborum laudantium. A veniam quia perspiciatis, reprehenderit sunt unde officiis!</p>
        <ItemCount max={stock} modify={setCounter} cantidad={counter} />
        <Button onClick={sumarAlCarrito}>Agregar al carrito</Button>
      </Card.Body>
      <Button onClick={goBack} variant="primary">Volver atrás</Button>
      <Link to='/cart' className='btn btn-info'>
        Ir al carrito
      </Link>
    </Card>
  );
}
