import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useCart } from '../context/CartContext';
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { useAlert } from '../context/AlertContext';

export default function Login() {
    const { saveUser, clearUser, user } = useCart()
    const { openAlert } = useAlert()

    const providerGoogle = new GoogleAuthProvider();
    const providerFacebook = new FacebookAuthProvider();

    const auth = getAuth();
    providerGoogle.addScope('https://www.googleapis.com/auth/contacts.readonly');
    providerFacebook.addScope('user_birthday');

    const google = () => {
        signInWithPopup(auth, providerGoogle)
            .then((result) => {
                const profile = { fullName: result._tokenResponse.fullName, email: result.user.email, providerId: result.providerId }
                saveUser(JSON.stringify(profile))
            }).catch((error) => {
                openAlert("error",error.message)
            });
    }

    const facebook = () => {
        signInWithPopup(auth, providerFacebook)
            .then((result) => {
                const profile = { fullName: result._tokenResponse.fullName, email: result.user.email, providerId: result.providerId }
                saveUser(JSON.stringify(profile))
            })
            .catch((error) => {
                openAlert("error",error.message)
            });
    }

    const loginSchema = Yup.object().shape({
        fullName: Yup.string()
            .min(3, "Nombre debe tener 3 caracteres como mínimo")
            .required("Nombres es requerido"),
        email: Yup.string()
            .email("Email inválido")
            .required("Email es requerido")
    });


    return (
        <div className="pt-xl-0">
            <div className="center-content col-xl-4 col-lg-5 col-md-8 col-xs-12 row ml-auto mr-auto">
                {!user.fullName ?
                    <div className="card animate__animated animate__backInDown">
                        <Formik
                            initialValues={{ email: "", fullName: "" }}
                            validationSchema={loginSchema}
                            onSubmit={(values) => {
                                saveUser(JSON.stringify(values))
                            }}>
                            {({ touched, errors }) => (
                                <div>
                                    <h2 className="text-center tittle-card"><u><b>INICIAR SESIÓN</b></u></h2>
                                    <Form className="col-auto pt-2">
                                        <div className="form-group">
                                            <label htmlFor="fullName">Nombres</label>
                                            <Field
                                                id="fullName"
                                                type="text"
                                                name="fullName"
                                                placeholder="Ej. Karla Gonzales Moran"
                                                autoComplete="off"
                                                className={`mt-2 form-control
                                                ${touched.fullName && errors.fullName ? "is-invalid" : ""}`}
                                            />

                                            <ErrorMessage
                                                component="div"
                                                name="fullName"
                                                className="invalid-feedback"
                                            />
                                        </div>
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
                                        <div className="col-auto text-center m-auto">
                                            <button
                                                type="submit"
                                                className="btn btn-primary btn-block mt-2"
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
                                onClick={() => facebook()}></i>
                            <i className="fa fa-google"
                                onClick={() => google()}></i>
                        </div>
                    </div>
                    :
                    <div className="card animate__animated animate__backInDown">
                        <h2 className="text-center tittle-card"><u><b>MI PERFIL</b></u></h2>
                        <div className="row">
                            <div className="col-12 form-group has-success has-feedback">
                                <h4 className="text-center pt-3">Hola, {user.fullName}</h4>
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