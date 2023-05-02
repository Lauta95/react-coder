import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { BsFillTrashFill } from 'react-icons/bs'
import { CartContext } from '../context/CartContext'
import './CartScreen.css'

export const CartScreen = () => {

    const { carrito, precioTotal, removerItem } = useContext(CartContext)

    return (
        <div className='container'>
            {
                carrito.map((prod) => (
                    <>
                        <div className='listado'>
                            <div>
                                <p>Producto: {prod.description}</p>
                                <p>Precio: US${prod.price}</p>
                                <p>Cantidad: {prod.counter} unidades</p>
                            </div>
                        </div>
                        <div className='listado'>
                            <Button className='btn btn-danger' onClick={() => removerItem(prod.id)}>
                                <BsFillTrashFill />
                            </Button>
                        </div>
                        <hr />
                    </>
                ))
            }
            <strong className='listado'>PRECIO TOTAL US${precioTotal()}</strong>
        </div>
    )
}
