import React, { useEffect, useState } from "react";
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({ producto }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [product, setProduct] = useState({});


    useEffect(() => {
        let getItem = new Promise((res, rej) => {
            setTimeout(() => {
                res(producto);
            }, 2000);
        });

        getItem
            .then((res) => {
                setProduct(res);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [producto]);

    return (
        <>
            {loading ? <p className="text-warning">Loading...</p> : <ItemDetail item={product} />}
            <p className="text-danger">{error ? error : null}</p>
        </>
    )
}

export default ItemDetailContainer
