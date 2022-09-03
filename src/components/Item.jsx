import { Button, Chip, Divider } from "@mui/material";
import React, { useState } from "react";
import ItemDetailContainer from './ItemDetailContainer';

const Item = ({ producto }) => {
    const [detail, setDetail] = useState(false);
    const [msg, setMsg] = useState('Ver detalle del producto');


    const viewDetail = () => {
        detail ? setMsg('Ver detalle del producto') : setMsg('Cerrar detalle del producto');
        detail ? setDetail(false) : setDetail(true);
    };


    return (
        <div className="col-lg-6 col-sm-6 col-xs-12 mb-3">
            <div className="card height-promocion text-center">
                <h2>{producto.nombre}</h2>
                <img src={require(`../assets/productos/${producto.imagen}`)} alt="Logo" className="productos-img" />
                {detail ?
                    <ItemDetailContainer producto={producto} />
                    : <div className='mt-2'>
                        <h2> <b>S/{(producto.precio).toFixed(2)}</b></h2>
                    </div>
                }
                <Button variant="outlined" className='m-2' onClick={viewDetail}>{msg}</Button>
                <Divider>
                    <Chip label="Stock" />
                </Divider>
                <p>Stock disponible: {producto.stock}</p>
            </div>
        </div>
    );
};
export default Item;
