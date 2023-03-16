import { useEffect } from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import CartaProducts from './CartaProducts';
import { useHistory } from 'react-router-dom';

let { getProducts } = require('../service/apiCall');

const ProductsBody = () => {

    const history = useHistory();

    const rutaActual = history.location.pathname;
    console.log(rutaActual);

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProductsArray();
        // eslint-disable-next-line
    },[]);

    const getProductsArray = async () => {
        const respuesta = await getProducts(rutaActual);
        setProducts(respuesta);
    }


    return (

        <Container>
            <br />
            <div className="row">
                {products.map(element => {
                    return <div className="col-6"><CartaProducts {...element} /><br /></div>
                }
                )}

            </div>
            <br />
        </Container>
    );
}

export default ProductsBody;