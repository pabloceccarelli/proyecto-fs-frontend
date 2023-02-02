import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/esm/Container';
import CartaProducts from './CartaProducts';

import productos from '../data/products.json'

/*  */
/* let { getAllProducts } = require('../service/apiCall'); */

/* let response;

(async () => {
    response = await getAllProducts();
    console.log(response);
    
})();

 */
const ProductsBody = () => {

    return (

        <Container>
            <br />
            <div className="row">
                {productos.map(element => {
                    return <div className="col-xl-2 col-lg-3 col-md-6 col-sm-12"><CartaProducts {...element} /> <br/></div>
                }
                )}

            </div>


            <br />

        </Container>

    );
}

export default ProductsBody;