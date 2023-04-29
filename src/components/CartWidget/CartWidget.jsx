import React, { useContext } from 'react'
import { FaCartArrowDown } from "react-icons/fa";
import './CartWidget.css'
import { CartContext } from '../context/CartContext';

export const CartWidget = () => {

  const {calcularCantidad} = useContext(CartContext)

  return (
    <>
    <FaCartArrowDown className='carrito'/>
    <span>{calcularCantidad()}</span>
    </>
  )
}
