import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/esm/Container';
import Carta from './Carta';
import integrantes from "../data/integrantes.json"


let arrayIntegrantes = integrantes.integrantes

const QuienesSomosBody = () => {
    return (
        
        <Container>
            <br />
            <CardGroup>
                <Carta {...arrayIntegrantes[0]}/>
                <Carta {...arrayIntegrantes[1]}/>
                <Carta {...arrayIntegrantes[2]}/>
            </CardGroup>
            <br />

        </Container>

    );
}

export default QuienesSomosBody;