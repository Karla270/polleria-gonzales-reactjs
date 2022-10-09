import React, { useEffect, useState } from "react";
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom'
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useAlert } from "../context/AlertContext";

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState({})
    const { openAlert } = useAlert()
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
            .catch((error) => openAlert("error", error))
            .finally(() => setLoading(false))
        // eslint-disable-next-line
    }, [id])

    return (
        <aside>
            {loading ? <p className="text-warning p-5">Cargando...</p> : (
                product.name ? <ItemDetail item={product} />
                    : <p className="text-warning p-5">No se encontró el producto</p>
            )}
        </aside>
    )
}

export default ItemDetailContainer
