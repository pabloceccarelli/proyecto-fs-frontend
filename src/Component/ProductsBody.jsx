import { useEffect } from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import CartaProducts from './CartaProducts';

let { getAllProducts } = require('../service/apiCall');

const ProductsBody = () =>{
    const [products, setProducts] = useState([]);

    useEffect (()=>{
        getProducts();
    },[]);

    const getProducts = async () =>{
        const respuesta = await getAllProducts();
        setProducts(respuesta);
    }

    return (

        <Container>
            <br />
            <div className="row">
                {products.map(element => {
                    return <div className="col-6"><CartaProducts {...element} /> <br/></div>
                }
                )}

            </div>
            <br />
        </Container>
    );
}

export default ProductsBody;