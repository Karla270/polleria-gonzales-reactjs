import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function CarouselPromociones() {
    return (
        <Carousel className="m-3" autoFocus={true} showThumbs={false} showStatus={false} autoPlay>
                <div>
                    <img src={require(`../assets/products/promo0.jpg`)} alt="Promociones"/>
                </div>
                <div>
                    <img src={require(`../assets/products/promo2.jpg`)} alt="Promo 1"/>
                </div>
                <div>
                    <img src={require(`../assets/products/promo3.jpg`)} alt="Promo 2"/>
                </div>
                <div>
                    <img src={require(`../assets/products/promo4.jpg`)} alt="Promo 3"/>
                </div>
            </Carousel>
    )
}