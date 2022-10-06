export default function Footer() {
    return (
        <>
            <footer>
                <div className="items-footer animate__animated animate__slideInLeft">
                    <div className="item-4">
                        <img src={require(`../assets/logo.png`)} alt="Logo" className="logo-img" />
                    </div>
                    <div className="mt-1 item-4">
                        <h5><b>Contáctanos</b></h5>
                        <p className="mr-3"> <i className="fa fa-phone"></i><span style={{fontSize : '20px'}}>999999999</span></p>
                    </div>
                    <div className="mt-1 item-4">
                        <h5 className="pb-1"><b>Medios de Pago</b></h5>
                        <i className="fa fa-paypal"></i>
                        <i className="fa fa-money"></i>
                        <i className="fa fa-credit-card"></i>
                    </div>
                    <div className="mt-1 item-4">
                        <h5 className="pb-1"><b>Síguenos en</b></h5>
                        <i href="#" className="fa fa-facebook"></i>
                        <i href="#" className="fa fa-instagram"></i>
                        <i href="#" className="fa fa-youtube"></i>
                    </div>
                </div>
            </footer>
            <div className="fixed-whatsapp">
                <img className="icono-contactenos" src={require(`../assets/whatsapp-icon-64px.png`)} alt="Icono de Whatsapp"
                    data-toggle="tooltip" data-placement="left" title="Whatsappeame!" />
            </div>
        </>

    )
}