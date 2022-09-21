import React, { useEffect, useState } from "react";
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom'
// import productos from "../productos";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [product, setProduct] = useState({})
    const { id } = useParams()

    useEffect(() => {
        setLoading(true)
        //le decimos nuestra base de datos y en que coleccion esta
        const coleccionProductos = collection(db, "items")
        //hacer una referencia que me traiga el ID del useParam
        const referenciaDoc = doc(coleccionProductos, id)
        //traemos un documento
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


    // useEffect(() => {
    //     let getItem = new Promise((res, rej) => {
    //         setTimeout(() => {
    //             res(productos.find((item) => item.id === Number(id)))
    //         }, 2000)
    //     })

    //     getItem
    //         .then((res) => {
    //             setProduct(res)
    //         })
    //         .catch((err) => {
    //             setError(err)
    //         })
    //         .finally(() => {
    //             setLoading(false)
    //         })
    // }, [id])

    return (
        <>
            {loading ? <p className="text-warning p-5">Loading...</p> : (
                product.name ? <ItemDetail item={product} />
                    : <p className="text-warning p-5">No se encontró el producto</p>
            )}
            <p className="text-danger">{error ? error : null}</p>
        </>
    )
}

export default ItemDetailContainer
