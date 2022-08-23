import * as React from 'react';
import RawHTML from './RawHTML';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { IconButton } from '@mui/material';

const ItemListContainer = (props) => {
    return (
        <div className="col-lg-3 col-sm-6 col-xs-12">
            <div className="card height-promocion text-center">
                <h2>{props.carta.nombre}</h2>
                <img src={require(`../assets/productos/${props.carta.imagen}`)} alt="Logo" className="productos-img" />
                <RawHTML children={props.carta.descripcion} className="mt-3" />
                <div className='mt-2'>
                    <h3> <b>S/{props.carta.precio}</b></h3>
                    <IconButton>
                        <AddShoppingCartIcon color="primary" sx={{ fontSize: 40 }} />
                    </IconButton>
                </div>
            </div>

        </div>
    )
}

export default ItemListContainer