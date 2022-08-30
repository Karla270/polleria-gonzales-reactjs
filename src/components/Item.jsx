import { Button, Chip, Divider } from "@mui/material";
import React from "react";
// import ItemCount from './ItemCount';
// import RawHTML from './RawHTML';

const Item = ({ producto }) => {
    return (
        <div className="col-lg-6 col-sm-6 col-xs-12 mb-3">
            <div className="card height-promocion text-center">
                <h2>{producto.nombre}</h2>
                <img src={require(`../assets/productos/${producto.imagen}`)} alt="Logo" className="productos-img" />
                <div className='mt-2'>
                    <h3> <b>S/{(producto.precio).toFixed(2)}</b></h3>
                </div>
                {/* <RawHTML children={producto.descripcion} className="mt-3" />
                <div className='mt-2'>
                    <h3> <b>S/{producto.precio}</b></h3>
                    <ItemCount item={producto} initial={1}></ItemCount>
                </div> */}
                <Button variant="outlined" className='m-2'>Ver detalle del producto</Button>

                <Divider>
                    <Chip label="Stock" />
                </Divider>
                <p>Stock disponible: {producto.stock}</p>
            </div>
        </div>
    );
};
export default Item;
