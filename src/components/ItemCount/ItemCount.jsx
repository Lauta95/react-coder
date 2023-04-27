// import React, { useState } from 'react';
import './ItemCount.css'

export const ItemCount = ({max, cantidad, modify}) => {

    const sumar = () => {
        if(cantidad < max){
            modify(cantidad + 1)
        }
    }
    const restar = () => {
        if(cantidad > 0 ){
            modify(cantidad - 1)
        }
    }
   
    return (
        <>
            <h4>Cantidad {cantidad}</h4>
            <div className='botones'>
                <button onClick={restar}>-</button>
                <button onClick={sumar}>+</button>
            </div>
        </>
    )
}