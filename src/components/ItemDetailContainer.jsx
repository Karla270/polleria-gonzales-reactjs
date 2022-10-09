import React, { useEffect, useState } from "react";
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom'
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [product, setProduct] = useState({})
    const { id } = useParams()

    useEffect(() => {
        setLoading(true)
        const coleccionProductos = collection(db, "items")
        const referenciaDoc = doc(coleccionProductos, id)
        getDoc(referenciaDoc)
            .then((result) => {
                setProduct({
                    id: result.id,
                    ...result.data()
                })
            })
            .catch((error) => setError(error))
            .finally(() => setLoading(false))
    }, [id])

    return (
        <aside>
            {loading ? <p className="text-warning p-5">Cargando...</p> : (
                product.name ? <ItemDetail item={product} />
                    : <p className="text-warning p-5">No se encontró el producto</p>
            )}
            <p className="text-danger">{error ? error : null}</p>
        </aside>
    )
}

export default ItemDetailContainer
