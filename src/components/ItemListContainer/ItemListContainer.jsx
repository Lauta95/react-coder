import React, { useEffect, useState } from 'react';
import { ItemList } from '../ItemList/ItemList';
import './itemListContainer.css'
import { useParams } from 'react-router-dom'
import { getFirestore } from '../../firebase/config'

export const ItemListContainer = () => {

  const [items, setItems] = useState([])

  const [loading, setLoading] = useState(false)

  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)

    const db = getFirestore();

    const productos = db.collection('productos')

    productos.get()
      .then((res) => {
        const newItem = res.docs.map((doc) => {
          return { id: doc.id, ...doc.data() }
        })
        console.table(newItem);
        setItems(newItem)
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false)
      })

  }, [categoryId])

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
