import { Button, Chip, Divider } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import ItemCount from './ItemCount';
import RawHTML from './RawHTML';


const ItemDetail = ({ item }) => {
    const navegar = useNavigate()

    return (
        <div className="container">
            {!item ? <p className="text-danger p-5">No se encontró el producto</p> :
                <div className="body p-3">
                    <div className="card height-promocion text-center">
                        <h2><u>{item.nombre}</u></h2>
                        <div className="row py-3">
                            <div className="col-sm-6">
                                <img src={require(`../assets/productos/${item.imagen}`)} alt="Logo" className="item-img" />
                            </div>
                            <div className="col-sm-6 pt-3">
                                <RawHTML children={item.descripcion} />
                                <h2 className='py-2'> <b>S/{item.precio}</b></h2>
                                <ItemCount item={item} initial={1}></ItemCount>
                            </div>
                        </div>

                        <Button variant="outlined" className='m-2' onClick={() => navegar(`/categoria/${item.category}`)}>Regresar</Button>
                        <Divider>
                            <Chip label="Stock" />
                        </Divider>
                        <p>Stock disponible: {item.stock}</p>
                    </div>
                </div>}


        </div>

    )
}

export default ItemDetail

