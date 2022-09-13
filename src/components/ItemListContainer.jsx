import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productos from "../productos";
import ItemList from './ItemList';
import logo from '../assets/logo.png';
const ItemListContainer = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [listProducts, setListProducts] = useState([])
    const { categoriaId } = useParams()


    useEffect(() => {
        setLoading(true)
        let promesaProductos = new Promise((res, rej) => {
            setTimeout(() => {
                if (categoriaId) {
                    res(productos.filter((item) => item.category === categoriaId))
                } else {
                    res(productos)
                }
            }, 2000)
        })

        promesaProductos
            .then((res) => {
                setListProducts(res)
            })
            .catch((err) => {
                setError(err)
            })
            .finally(() => {
                setLoading(false)
            });
    }, [categoriaId])

    return (

        <div className="col-12 row my-5">
            <div className='carta-logo col-sm-4'>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className="col-sm-8">
                {loading ? <p className="text-warning p-5">Loading...</p> : <ItemList listProducts={listProducts} />}
                <p className="text-danger">{error ? error : null}</p>
            </div>
        </div>



    )
}

export default ItemListContainer