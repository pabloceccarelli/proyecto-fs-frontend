import Carousel from 'react-bootstrap/Carousel';
import "../css/HomeCarrousel.css"

const UncontrolledExample2 = () => {
    return (
        <Carousel className='col-12 col-lg-6 carrusel'>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://pbs.twimg.com/media/FkYR4itWIAIgeic.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://cdn.futbolargentino.com/sdi/2022/12/22/camiseta-de-campeon-la-nueva-casaca-de-la-seleccion-argentina-1100657.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/12/20/16715550770767.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default UncontrolledExample2;