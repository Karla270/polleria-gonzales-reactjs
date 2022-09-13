import { Button, Chip, Divider, ButtonGroup, Box } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import ItemCount from './ItemCount';
import RawHTML from './RawHTML';


const ItemDetail = ({ item }) => {
    const { nombre, descripcion, category, precio, stock, imagen, id } = item
    const [count, setCount] = useState(1)
    const [compra, setCompra] = useState(false)
    const { addItem } = useCart()
    const navegar = useNavigate()


    const onAdd = () => {
        let purchase = {
            id,
            nombre,
            descripcion,
            category,
            precio,
            stock,
            imagen,
            quantity: count
        }
        setCompra(true)
        addItem(purchase, count)
    }


    return (
        <div className="container">
            {!item ? <p className="text-danger p-5">No se encontró el producto</p> :
                <div className="body p-3">
                    <div className="card height-promocion text-center">
                        <h2><u>{nombre}</u></h2>
                        <div className="row py-3">
                            <div className="col-sm-6">
                                <img src={require(`../assets/products/${imagen}`)} alt="Logo" className="item-img" />
                            </div>
                            <div className="col-sm-6 pt-3">
                                <RawHTML children={descripcion} />
                                <h2 className='py-2'> <b>S/{precio}</b></h2>
                                {!compra
                                    ? <ItemCount stock={stock} initial={1} onAdd={onAdd} count={count} setCount={setCount} />
                                    : <Box className='mt-3'>
                                        <ButtonGroup>
                                            <ButtonGroup>
                                                <Button variant="contained"
                                                    color="warning"
                                                    onClick={() => navegar('/')}
                                                >
                                                    Seguir Comprando
                                                </Button>
                                            </ButtonGroup>
                                            <Box className='mx-1'>
                                            </Box>
                                            <ButtonGroup>
                                                <Button variant="contained"
                                                    color="success"
                                                    onClick={() => navegar('/cart')}
                                                >
                                                    Ir al carrito
                                                </Button>
                                            </ButtonGroup>
                                        </ButtonGroup>
                                    </Box>
                                }
                            </div>
                        </div>

                        <Button variant="outlined" className='m-2' onClick={() => navegar(`/categoria/${category}`)}>Regresar</Button>
                        <Divider>
                            <Chip label="Stock" />
                        </Divider>
                        <p>Stock disponible: {stock}</p>
                    </div>
                </div>}
        </div>

    )
}

export default ItemDetail

