import { addDoc, collection, doc, serverTimestamp, writeBatch } from 'firebase/firestore'
import React from 'react'
import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'
import { db } from '../firebase/firebase'
import { Button } from '@mui/material'
import logo from '../assets/logo.png';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Checkout = () => {
    const [orderId, setOrderId] = useState('')
    const [loader, setLoader] = useState(false)
    const { cart, cartTotal, clear, user } = useCart()
    const navigate = useNavigate()

    const CheckSchema = Yup.object().shape({
        email: Yup.string()
            .email("Email inválido")
            .required("Email es requerido"),
        phone: Yup.string()
            .min(9, "Teléfono debe tener 9 dígitos como mínimo")
            .max(9, "Teléfono debe tener 9 dígitos como máximo")
            .required("Teléfono es requerido"),
        name: Yup.string()
            .min(3, "Nombre debe tener 3 caracteres como mínimo")
            .required("Nombre es requerido"),
        emailConfirmed: Yup.string()
            .oneOf([Yup.ref("email"), null], "No coincide el email")
            .email("Email inválido")
            .required("Validar email es requerido"),
    });

    const finalizarCompra = (client) => {
        setLoader(true)
        const ventas = collection(db, "orders")
        addDoc(ventas, {
            client: client,
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
                    <div className='col-md-5 carta-logo d-none d-lg-flex'>
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                    <div className="col-md-12 col-lg-6 card body animate__animated animate__backInDown m-lg-0 m-2 mb-lg-3">
                        <Formik
                            initialValues={{ name: "", phone: "", email: user !== "Bienvenid@" ? user : "", emailConfirmed: "" }}
                            validationSchema={CheckSchema}
                            onSubmit={(values) => {
                                finalizarCompra(values)
                            }}>
                            {({ touched, errors }) => (
                                <div>
                                    <h2 className="text-center tittle-card"><u><b>CHECKOUT</b></u></h2>
                                    <Form className="col-auto pt-2" style={{fontSize: '15px'}}>
                                        <div className="form-group">
                                            <label htmlFor="name">Nombre completos</label>
                                            <Field
                                                id="name"
                                                type="text"
                                                name="name"
                                                placeholder="Ej. Karla Gonzales"
                                                autoComplete="off"
                                                className={`form-control
                                                ${touched.name && errors.name ? "is-invalid" : ""}`}
                                            />

                                            <ErrorMessage
                                                component="div"
                                                name="name"
                                                className="invalid-feedback"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="phone">Teléfono</label>
                                            <Field
                                                id="phone"
                                                type="number"
                                                name="phone"
                                                placeholder="Ej. 910719636"
                                                autoComplete="off"
                                                className={`form-control
                                                ${touched.phone && errors.phone ? "is-invalid" : ""}`}
                                            />

                                            <ErrorMessage
                                                component="div"
                                                name="phone"
                                                className="invalid-feedback"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <Field
                                                id="email"
                                                type="email"
                                                name="email"
                                                placeholder="Ej. abc@gmail.com"
                                                autoComplete="off"
                                                className={`form-control
                                                ${touched.email && errors.email ? "is-invalid" : ""}`}
                                            />

                                            <ErrorMessage
                                                component="div"
                                                name="email"
                                                className="invalid-feedback"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="emailConfirmed">Validar email</label>
                                            <Field
                                                id="emailConfirmed"
                                                type="email"
                                                name="emailConfirmed"
                                                placeholder="Ej. abc@gmail.com"
                                                autoComplete="off"
                                                className={`form-control
                                                ${touched.emailConfirmed && errors.emailConfirmed ? "is-invalid" : ""}`}
                                            />

                                            <ErrorMessage
                                                component="div"
                                                name="emailConfirmed"
                                                className="invalid-feedback"
                                            />
                                        </div>
                                        <div className="col-auto text-center m-auto">
                                            <button
                                                type="submit"
                                                className="btn btn-primary btn-block mt-2"
                                            >
                                                FINALIZAR COMPRA
                                            </button>
                                        </div>
                                    </Form>
                                </div>
                            )}
                        </Formik>
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