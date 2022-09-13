import React, { useEffect, useState } from "react";
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom'
import productos from "../productos";

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [product, setProduct] = useState({})
    const { id } = useParams()

    useEffect(() => {
        let getItem = new Promise((res, rej) => {
            setTimeout(() => {
                res(productos.find((item) => item.id === Number(id)))
            }, 2000)
        })

        getItem
            .then((res) => {
                setProduct(res)
            })
            .catch((err) => {
                setError(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [id])

    return (
        <>
            {loading ? <p className="text-warning p-5">Loading...</p> : <ItemDetail item={product} />}
            <p className="text-danger">{error ? error : null}</p>
        </>
    )
}

export default ItemDetailContainer
