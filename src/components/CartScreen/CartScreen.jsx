import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BsFillTrashFill } from 'react-icons/bs'
import { CartContext } from '../context/CartContext'
import './CartScreen.css'

export const CartScreen = () => {

    const { carrito, precioTotal, removerItem, vaciarCarrito } = useContext(CartContext)

    return (
        <div className='container'>
            {
                carrito.length === 0
                    ? <>
                        <div className='vacio'>
                            <h3>Carrito Vacío</h3>
                            <Link to='/' className='btn btn-success '>Volver al inicio</Link>
                        </div>
                    </>
                    : <>
                        <h3 className='listado'>Resumen de compras</h3>
                        {
                            carrito.map((prod) => (
                                <>
                                    <div className='listado'>
                                        <p>Producto: {prod.description}</p>
                                        <p>Precio: US${prod.price}</p>
                                        <p>Cantidad: {prod.counter} unidades</p>
                                        <Button className='btn btn-danger' onClick={() => removerItem(prod.id)}>
                                            <BsFillTrashFill />
                                        </Button>
                                    </div>
                                    <hr />
                                </>
                            ))
                        }
                        <div className='ptotal'>
                            <strong>PRECIO TOTAL US${precioTotal()}</strong>
                            <Button className='btn btn-danger' onClick={vaciarCarrito}>
                                Vaciar carrito
                            </Button>
                        </div>
                    </>
            }

        </div>
    )
}
