import Card from 'react-bootstrap/Card';


const Carta = (producto) => {

    return (
        <>
            <Card>
                <Card.Img variant="top" src={producto.imagen}/>
                <Card.Body>
                    <Card.Title>{producto.descripcion}</Card.Title>
                    <Card.Text>
                        Marca: {producto.marca}
                        <br />
                        Género: {producto.genero}
                        <br />
                        Categoría: {producto.categoria}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Precio: ${producto.precio}</small>
                </Card.Footer>
            </Card>
        </>
    )
}
export default Carta;