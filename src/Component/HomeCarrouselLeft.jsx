import Carousel from 'react-bootstrap/Carousel';
import "../css/HomeCarrousel.css"

const UncontrolledExample = () => {
    return (
        <Carousel className='col-12 col-lg-6 carrusel'>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://topperarg.vtexassets.com/arquivos/ids/270395-800-800?width=800&height=800&aspect=true"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/153/817/products/diseno-sin-titulo-1001-f9555a8159d3bb6dfe16595266165901-1024-1024.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://d2r9epyceweg5n.cloudfront.net/stores/244/150/products/zapatillas-puntera-trelew1-672a1f2179cf43161a16594547605356-1024-1024.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default UncontrolledExample;