import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Item = ({ producto }) => {

    const navegar = useNavigate()

    return (
        <div className="col-lg-6 col-sm-6 col-xs-12 mb-3">
            <div className="card height-promocion text-center">
                <h2>{producto.nombre}</h2>
                <img src={require(`../assets/productos/${producto.imagen}`)} alt="Logo" className="productos-img" />
                <div className='mt-2'>
                    <h2> <b>S/{(producto.precio).toFixed(2)}</b></h2>
                </div>
                <Button variant="outlined" className='m-2' onClick={() => navegar(`/detalle/${producto.id}`)}>Ver detalle del producto</Button>
            </div>
        </div>
    );
};
export default Item;
