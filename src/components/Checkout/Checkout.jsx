import React, { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import 'firebase/firestore'

export const Checkout = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext)
  const [email, setEmail] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleSubmit = (e) => {

    e.preventDefault()
    console.log('Email:', email);
    console.log('Nombre:', nombre);
    console.log('Apellido:', apellido);
    console.log('Telefono:', telefono);
    
      const orden = {
        buyer: {
          email,
          nombre,
          apellido,
          telefono
        },
        item: carrito,
        total_price: precioTotal(),
        data: firebase.firestore.Timestamp.fromDate(new Date())
      }
      console.log(orden)
  }

  return (
    <div className='text-center'>
      <h3>Terminar compra</h3>
      <hr />

      <form onSubmit={handleSubmit} className='container mt-3'>
        <div className='form-group'>
          <label htmlFor="email">E-mail</label>
          <input type="text" className='form-control' onChange={(e) => setEmail(e.target.value)} value={email} />
        </div>

        <div className='form-group'>
          <label htmlFor="nombre">Nombre</label>
          <input type="text" className='form-control' onChange={(e) => setNombre(e.target.value)} value={nombre} />
        </div>

        <div className='form-group'>
          <label htmlFor="apellido">Apellido</label>
          <input type="text" className='form-control' onChange={(e) => setApellido(e.target.value)} value={apellido} />
        </div>

        <div className='form-group'>
          <label htmlFor="telefono">Teléfono</label>
          <input type="text" className='form-control' onChange={(e) => setTelefono(e.target.value)} value={telefono} />
        </div>
        <button type='submit' className='btn btn-success mt-3'>Finalizar</button>
        <Link to='/cart' className='btn btn-info mt-3'>Volver al carrito</Link>
      </form>
    </div>
  )
}
