import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import { useCart } from '../context/CartContext';

export default function Login() {
    const [profile, setProfile] = useState(false)
    const [mensaje, setMensaje] = useState(false)
    const {saveUser, clearUser } = useCart()
    const [user, setUser] = useState({})

    useEffect(() => {
        if (sessionStorage.getItem('user')) {
            setProfile(true)
        }
    }, [])


    const datosUser = (e) => {
        setMensaje(false)
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const login = () => {
        if (Object.values(user).length !== 2) {
            setMensaje(true)
        } else {
            setMensaje(false)
            saveUser(user.user)
            setProfile(true)
        }
    }

    const logout = () => {
        clearUser()
        setProfile(false)
    }
    
    return (
        <div className="center-content container pt-md-5 pt-lg-0">
            <div className="row pb-lg-5 pb-md-1">
                <div id="form-data" className="col-lg-6 col-md-8 col-xs-12 ml-auto mr-auto">
                    {!profile
                        ? <form id="formLogin" name="formLogin">
                            <div className="card animate__animated animate__backInDown">
                                <h2 className="text-center tittle-card"><u><b>INICIAR SESIÓN</b></u></h2>
                                <div className="col-auto">
                                    <div className="col-12 form-group has-success has-feedback">
                                        <label htmlFor="user">Usuario</label>
                                        <input type="text" className="form-control" id="user" name="user" onChange={datosUser} />
                                    </div>
                                    <div className="col-12 form-group has-success has-feedback">
                                        <label htmlFor="contrasena">Contraseña</label>
                                        <input type="password" className="form-control" id="contrasena" name="contrasena" onChange={datosUser} />
                                    </div>
                                    <div className="col-12 text-center">
                                        <Button variant="contained" color="success" onClick={login}>Ingresar</Button>
                                        {mensaje && <p style={{ color: 'red', paddingTop: '10px' }}> Por favor complete todos los campos</p>}
                                    </div>
                                    <div className="col-12 text-center pt-4 pb-4">
                                        <p className="pb-1"><b>o inicia sesión con</b></p>
                                        <i className="fa fa-facebook" ></i>
                                        <i className="fa fa-google"></i>

                                    </div>
                                </div>
                            </div>
                        </form> :
                        <form id="formPerfil" name="formPerfil">
                            <div className="card animate__animated animate__backInDown">
                                <h2 className="text-center tittle-card"><u><b>MI PERFIL</b></u></h2>
                                <div className="row">
                                    <div className="col-12 form-group has-success has-feedback">
                                        <h4 className="text-center pt-3">Hola, {sessionStorage.getItem('user')}</h4>
                                    </div>
                                    <div className="col-12 text-center">
                                        <Button variant="contained" color="warning" onClick={logout}>Cerrar Sesión</Button>
                                    </div>
                                </div>
                            </div>
                        </form>}
                </div>
            </div>
        </div>
    )
}