import React, { useEffect, useState } from "react";
import productos from "../productos";
import ItemList from './ItemList';

const ItemListContainer = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [listProducts, setListProducts] = useState([]);


    useEffect(() => {
        let promesaProductos = new Promise((res, rej) => {
            setTimeout(() => {
                res(productos);
            }, 2000);
        });

        promesaProductos
            .then((res) => {
                setListProducts(res);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <div className="col-sm-8">
            {loading ? <p className="text-warning">Loading...</p> : <ItemList listProducts={listProducts} />}
            <p className="text-danger">{error ? error : null}</p>
        </div>
    )
}

export default ItemListContainer