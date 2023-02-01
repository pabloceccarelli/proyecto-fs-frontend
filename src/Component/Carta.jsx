import Card from 'react-bootstrap/Card';


const Carta = (integrante) => {

    return (
        <>
            <Card>
                <Card.Img variant="top" src={integrante.foto}/>
                <Card.Body>
                    <Card.Title>{integrante.nombreApellido}</Card.Title>
                    <Card.Text>
                        Email: {integrante.mail}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Skills: {integrante.skills}</small>
                </Card.Footer>
            </Card>
        </>
    )
}
export default Carta;