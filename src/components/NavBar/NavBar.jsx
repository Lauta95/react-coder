import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'


export const NavBar = () => {
  return (
    <div className='menu'>
      <Link to='/'>Inicio</Link>
      <Link to='/productos/Acción'>Juegos de Acción</Link>
      <Link to='/productos/Crimen'>Juegos de Crimen</Link>
      <Link to='/productos/Supervivencia'>Juegos de Supervivencia</Link>
      <Link to='counter'>Contador</Link>
      <Link to='pika'>Pokemons</Link>
      <Link to='cart'><CartWidget /></Link>
    </div>
  )
}
