import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useCart } from '../context/CartContext';

export default function Login() {
    const { saveUser, clearUser, user } = useCart()

    const LoginSchema = Yup.object().shape({
        email: Yup.string()
            .email("Invalid email address format")
            .required("Email is required"),
        password: Yup.string()
            .min(3, "Password must be 3 characters at minimum")
            .required("Password is required"),
    });


    return (
        <div className="center-content container pt-md-5 pt-lg-0">
            <div className="col-lg-6 col-md-8 col-xs-12 ml-auto mr-auto">
                {user === 'Bienvenid@' ?
                    <div className="card animate__animated animate__backInDown">
                        <Formik
                            initialValues={{ email: "", password: "" }}
                            validationSchema={LoginSchema}
                            onSubmit={(values) => {
                                saveUser(values.email)
                            }}>
                            {({ touched, errors }) => (
                                <div>
                                    <h2 className="text-center tittle-card"><u><b>INICIAR SESIÓN</b></u></h2>
                                    <Form className="col-auto">
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <Field
                                                id="email"
                                                type="email"
                                                name="email"
                                                placeholder="Enter email"
                                                autoComplete="off"
                                                className={`mt-2 form-control
                                                ${touched.email && errors.email ? "is-invalid" : ""}`}
                                            />

                                            <ErrorMessage
                                                component="div"
                                                name="email"
                                                className="invalid-feedback"
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="password" className="mt-3">
                                                Contraseña
                                            </label>
                                            <Field
                                                id="password"
                                                type="password"
                                                name="password"
                                                placeholder="Enter password"
                                                className={`mt-2 form-control
                                                ${touched.password && errors.password
                                                        ? "is-invalid"
                                                        : ""
                                                    }`}
                                            />
                                            <ErrorMessage
                                                component="div"
                                                name="password"
                                                className="invalid-feedback"
                                            />
                                        </div>
                                        <div className="col-auto text-center m-auto">
                                            <button
                                                type="submit"
                                                className="btn btn-primary btn-block mt-4"
                                            >
                                                INGRESAR
                                            </button>
                                        </div>
                                    </Form>
                                </div>
                            )}
                        </Formik>
                        <div className="col-12 text-center py-3">
                            <p><b>O inicia sesión con</b></p>
                            <i className="fa fa-facebook"
                                onClick={() => window.open("https://www.facebook.com/", "_blank")}></i>
                            <i className="fa fa-google"
                                onClick={() => window.open("https://mail.google.com/", "_blank")}></i>
                        </div>
                    </div>
                    :
                    <div className="card animate__animated animate__backInDown">
                        <h2 className="text-center tittle-card"><u><b>MI PERFIL</b></u></h2>
                        <div className="row">
                            <div className="col-12 form-group has-success has-feedback">
                                <h4 className="text-center pt-3">Hola, {user}</h4>
                            </div>
                            <div className="col-auto text-center m-auto">
                                <button
                                    type="button"
                                    className="btn btn-danger btn-block"
                                    onClick={clearUser}
                                >
                                    CERRAR SESIÓN
                                </button>
                            </div>
                        </div>
                    </div>
                }
            </div >
        </div >
    )
}