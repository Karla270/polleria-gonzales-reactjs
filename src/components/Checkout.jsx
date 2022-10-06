import { addDoc, collection, doc, serverTimestamp, writeBatch } from 'firebase/firestore'
import React from 'react'
import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'
import { db } from '../firebase/firebase'
import { Button } from '@mui/material'
import logo from '../assets/logo.png';

const Checkout = () => {
    const [comprador, setComprador] = useState({})
    const [orderId, setOrderId] = useState('')
    const [mensaje, setMensaje] = useState(false)
    const [loader, setLoader] = useState(false)
    const { cart, cartTotal, clear } = useCart()
    const navigate = useNavigate()
    const datosComprador = (e) => {
        setMensaje(false)
        setComprador({
            ...comprador,
            [e.target.name]: e.target.value
        })
    }

    const finalizarCompra = (e) => {
        e.preventDefault()
        if (Object.values(comprador).length !== 3) {
            setMensaje(true)
        } else {
            setMensaje(false)
            setLoader(true)
            const ventas = collection(db, "orders")
            addDoc(ventas, {
                comprador,
                items: cart,
                total: cartTotal(),
                date: serverTimestamp()
            })
                .then(async (res) => {
                    await updateOrder(res)
                })
                .catch((error) => console.log(error))
                .finally(() => setLoader(false))
        }

    }

    const updateOrder = async (res) => {
        try {
            const batch = writeBatch(db);
            cart.forEach(element => {
                const nycRef = doc(db, "items", element.id);
                batch.update(nycRef, { stock: Number(element.stock - element.quantity) });
            });
            await batch.commit();
            setOrderId(res.id)
            clear()
        }
        catch (e) {
            console.error(e);
        }

    }

    if (loader) {
        return <p className="text-warning p-5">Cargando...</p>
    }
    return (
        <div className='pt-md-5 pt-lg-0'>
            {!orderId
                ? <div className="col-12 row center-content">
                    <div className='col-md-5 carta-logo d-none d-lg-block'>
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                    <div className="col-md-12 col-lg-6 card body animate__animated animate__backInDown m-md-2 m-lg-0">
                        <h2><u>Checkout</u></h2>
                        <form className='py-3 col-auto'>
                            <div className="mb-3">
                                <label className="form-label">Nombre completos</label>
                                <input className="form-control" type="text" placeholder='Nombre y Apellido' name="name" onChange={datosComprador} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Número de telefono</label>
                                <input className="form-control" type="number" placeholder='011587892545' name="phone" onChange={datosComprador} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">E-mail</label>
                                <input className="form-control" type="email" placeholder='pepe@gmail.com' name="email" onChange={datosComprador} />
                            </div>
                            <Button variant="contained" color="success" onClick={finalizarCompra}>Finalizar Compra</Button>
                            {mensaje && <p style={{ color: 'red', paddingTop: '10px' }}> Por favor complete todos los campos</p>}
                        </form>
                    </div>
                </div>
                :
                <div className="center-content container">
                    <div className="body carta-logo">
                        <div className="card card-check p-5">
                            <h2 className="pb-2 font-weight-bold">¡Muchas gracias por su compra!</h2>
                            <h4 className="text-success pb-2">Su orden es: <b>{orderId}</b></h4>
                            <Button variant="outlined" onClick={() => navigate('/')}>Volver</Button>
                        </div>
                    </div>
                </div>}
        </div>
    )
}

export default Checkout