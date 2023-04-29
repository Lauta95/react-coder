import React from 'react'
import {Button} from 'react-bootstrap'
import {BsFillTrashFill} from 'react-icons/bs'

export const CartScreen = () => {
    return (
        <div className='container my-5'>
            <h3>Resumen de compras</h3>
            <hr />
            <div className='listado'>
                <p>producto</p>
                <p>$</p>
                <p>cantidad</p>
                <button className='btn btn-danger'>
                    <BsFillTrashFill/>
                </button>
            </div>

        </div>
    )
}
