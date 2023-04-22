import React, { useState } from 'react';
import './ItemCount.css'

export const ItemCount = () => {

    const [counter, setCounter] = useState(0)
    const sumar = () => {
        setCounter(counter + 1)
    }
    const restar = () => {
        if(counter > 0 ){
            setCounter(counter - 1)
        }
    }
    const resetear = () => {
        setCounter(0)
    }
    return (
        <>
            <h4>Contador {counter}</h4>
            <div className='botones'>
                <button onClick={restar}>-</button>
                <button onClick={resetear}>RESET</button>
                <button onClick={sumar}>+</button>
            </div>
        </>
    )
}