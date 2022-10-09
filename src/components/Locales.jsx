import React from 'react'

export default function Locales() {
    return (
        <div className="container-fluid">
            <div className="py-4">
                <h1 className="text-center"><u><b>NUESTROS LOCALES</b></u></h1>
                <div className="mx-3">
                    <div className="row pt-md-1">
                        <div className="col-lg-6 col-sm-12 text-center">
                            <div className="card animate__animated animate__rotateInDownLeft">
                                <h3 className="text-center text-uppercase tittle-card"><u><b>Santiago de Surco </b></u></h3>
                                <div style={{ fontSize: '22px' }}>
                                    <p>Av. Las Gaviotas 2121</p>
                                    <p>51-99999999</p>
                                    <p>Delivery: </p>
                                    <p>De Lunes a Domingo de
                                        11:00am a 11:00pm
                                    </p>
                                    <p>Atención en tienda: </p>
                                    <p>De Lunes a Domingo de
                                        11:00am a 10:00pm </p>
                                </div>
                                <div className="text-center">
                                    <div dangerouslySetInnerHTML={{
                                        __html: "<iframe class='responsive-iframe'  width='600' height='280' style='border:0;' allowFullScreen='' " +
                                            "loading='lazy' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.717307860338!2d-58.43444398543519!3d-34.586018880464124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc945173b3dd7%3A0xe8a347bb55df550c!2sCODER%20HOUSE%20%7C%20Coderhouse%20S.R.L.!5e0!3m2!1ses!2sbr!4v1646792688288!5m2!1ses!2sbr' />"
                                    }} />
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-6 col-sm-12 text-center pt-3 pt-lg-0">
                            <div className="card animate__animated animate__rotateInDownRight">
                                <h3 className="text-center text-uppercase tittle-card"><u><b>Chorrillos</b></u></h3>
                                <div style={{ fontSize: '22px' }}>
                                    <p>Av. Las Gaviotas 2121</p>
                                    <p>51-99999999</p>
                                    <p>Delivery: </p>
                                    <p>De Lunes a Domingo de
                                        11:00am a 11:00pm
                                    </p>
                                    <p>Atención en tienda: </p>
                                    <p>De Lunes a Domingo de
                                        11:00am a 10:00pm </p>
                                </div>
                                <div className="text-center">
                                    <div dangerouslySetInnerHTML={{
                                        __html: "<iframe class='responsive-iframe'  width='600' height='280' style='border:0;' allowFullScreen='' " +
                                            "loading='lazy' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.717307860338!2d-58.43444398543519!3d-34.586018880464124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc945173b3dd7%3A0xe8a347bb55df550c!2sCODER%20HOUSE%20%7C%20Coderhouse%20S.R.L.!5e0!3m2!1ses!2sbr!4v1646792688288!5m2!1ses!2sbr' />"
                                    }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}