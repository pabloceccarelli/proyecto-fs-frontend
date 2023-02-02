import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/esm/Container';
import CartaProducts from './CartaProducts';
/* import { getAllProducts } from '../service/apiCall';
 */
let { getAllProducts } = require ('../service/apiCall');
let response = getAllProducts();
console.log(response);

let { getAllProducts } = require('../service/apiCall');
let response;
(async () => {
    response = await getAllProducts();
})
    ();
const ProductsBody = () => {
    
    return (
        
        <Container>
            <br />
            <CardGroup>
{/*                 {
                    productos.array.forEach(element => {
                      <CartaProducts {...element}/>  
                    })
                } */}
                <CartaProducts {...response[0]}/>
            </CardGroup>
            <br />

        </Container>

    );
}

export default ProductsBody;