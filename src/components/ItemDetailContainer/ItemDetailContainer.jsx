import React, { useEffect, useState } from 'react';
import { getFirestore } from '../../firebase/config';
import { ImSpinner3 } from 'react-icons/im'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import './ItemDetailContainer.css'

export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)

    const [loading, setLoading] = useState(false)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        const db = getFirestore()

        const productos = db.collection('productos')

        const item = productos.doc(itemId)

        item.get()
            .then((doc) => {
                setItem({
                    id: doc.id, ...doc.data()
                })
            })
            .catch((err) => console.log(err))
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])

    return (
        <section>
            <div className='container-card'>
                {
                    loading
                        ? <ImSpinner3 />
                        : <ItemDetail {...item} />
                }
            </div>
        </section>

    )
}
