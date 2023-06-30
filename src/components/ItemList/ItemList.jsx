import React from 'react';
import { Item } from '../Item/Item';
import './itemList.css';

export const ItemList = ({ productos = [] }) => {
    return (
        <div>
            <h3 className='titulo'>Nuestros juegos</h3>
            <div className='container'>
                <div className='fila'>
                    {productos.map((item) => <Item {...item} key={item.id} />)}
                </div>
            </div>
        </div>
    )
}