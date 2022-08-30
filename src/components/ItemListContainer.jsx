import React, { useEffect, useState } from "react";
import ItemList from './ItemList';

const ItemListContainer = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [listProducts, setListProducts] = useState([]);


    useEffect(() => {
        let promesaProductos = new Promise((res, rej) => {
            setTimeout(() => {
                res([
                    {
                        "id": "a",
                        "nombre": "POLLO OFERTA",
                        "precio": 55,
                        "imagen": "pollo.png",
                        "descripcion": "<span>1 Pollo a la Brasa</span><br><span>+ Papas Fritas </span><br><span>+ Inka Hola 1.5 Lt <span><br><span>+ Ensalada Fresca</span>",
                        "stock": 10
                    },
                    {
                        "id": "b",
                        "nombre": "1/2 POLLO OFERTA",
                        "precio": 30,
                        "imagen": "medio_pollo.png",
                        "descripcion": "<span>1/2 Pollo a la Brasa</span><br><span>+ Papas Fritas </span><br><span>+ Ensalada Fresca</span>",
                        "stock": 8
                    }
                    ,
                    {
                        "id": "c",
                        "nombre": "1/4 POLLO OFERTA",
                        "precio": 16,
                        "imagen": "cuarto_pollo.png",
                        "descripcion": "<span>1/4 Pollo a la Brasa</span><br><span>+ Papas Fritas </span><br><span>+ Ensalada Fresca</span>",
                        "stock": 10
                    },
                    {
                        "id": "d",
                        "nombre": "1/8 POLLO OFERTA",
                        "precio": 10,
                        "imagen": "octavo_pollo.jpg",
                        "descripcion": "<span>1/8 Pollo a la Brasa</span><br><span>+ Papas Fritas </span><br><span>+ Arroz Chaufa</span>",
                        "stock": 8
                    }
                ]);
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
            <p className="text-warning">{loading ? 'Loading...' : null}</p>
            <p className="text-danger">{error ? error : null}</p>
            <ItemList listProducts={listProducts} />
        </div>
    )
}

export default ItemListContainer