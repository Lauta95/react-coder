import React, { useEffect, useState } from 'react';
import { pedirProductos } from '../../helpers/pedirProductos';
import {ItemList} from '../ItemList/ItemList';
import './itemListContainer.css'

export const ItemListContainer = (props) => {

  const [items, setItems] = useState([])

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    pedirProductos()
      .then((res) => {
        setItems(res)
        console.log(res);
      })
      .catch((error) => console.log(error))
      .finally(() => { setLoading(false) })
  }, [])

  return (
    <>
      {
        loading
          ? <h2>cargando</h2>
          : <ItemList productos={items} />
      }
    </>
  )
}
