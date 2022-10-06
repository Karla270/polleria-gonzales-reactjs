
export default function Carousel() {
    return (
        <div className="col-sm-12 pt-1">
            <div className="text-center animate__animated animate__backInDown">
                <div className="container">
                    <div id="demo" className="carousel slide size-carousel" data-ride="carousel">
                        <ul className="carousel-indicators">
                            <li data-target="#demo" data-slide-to="0" className="active"></li>
                            <li data-target="#demo" data-slide-to="1"></li>
                            <li data-target="#demo" data-slide-to="2"></li>
                            <li data-target="#demo" data-slide-to="3"></li>
                        </ul>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={require(`../assets/products/promo0.jpg`)} alt="Promo 1" />
                            </div>
                            <div className="carousel-item">
                                <img src={require(`../assets/products/promo2.jpg`)} alt="Promo 2" />
                            </div>
                            <div className="carousel-item">
                                <img src={require(`../assets/products/promo3.jpg`)} alt="Promo 3" />
                            </div>
                            <div className="carousel-item">
                                <img src={require(`../assets/products/promo4.jpg`)} alt="Promo 4" />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#demo" data-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </a>
                        <a className="carousel-control-next" href="#demo" data-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}