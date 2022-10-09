import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from './ItemList';
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore'
import { db } from "../firebase/firebase";
import CarouselPromociones from "./Carousel";
import { useAlert } from "../context/AlertContext";

const ItemListContainer = () => {
    const [loading, setLoading] = useState(false)
    const [productList, setProductList] = useState([])
    const { openAlert } = useAlert()
    const { categoriaId } = useParams()


    useEffect(() => {
        setLoading(true)
        const productos = categoriaId ? query(collection(db, "items"), where("category", "==", categoriaId), orderBy("price", "desc")) : query(collection(db, "items"), orderBy("category", "desc"), orderBy("price", "desc"))
        getDocs(productos)
            .then((result) => {
                const lista = result.docs.map((product) => {
                    return {
                        id: product.id,
                        ...product.data()
                    }
                })
                setProductList(lista)
            })
            .catch((error) => openAlert("error", error.message))
            .finally(() => setLoading(false))
    }, [categoriaId, openAlert])

    return (
        <div className="my-lg-0 my-xl-3">
            {loading ? <p className="text-warning p-5">Cargando...</p> :
                <>
                    {
                        categoriaId ?
                            <ItemList productList={productList} className={'col-sm-12 row m-lg-0 m-1 center-content'} categoriaId={categoriaId} />
                            :
                            <><CarouselPromociones /><ItemList productList={productList} className={'row m-lg-0 m-1'} /></>
                    }
                </>
            }
        </div>
    )
}

export default ItemListContainer