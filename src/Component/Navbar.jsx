import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../css/Navbar.css";
import {Link} from "react-router-dom";

const NavbarComp = () => {
    return (
        <Navbar bg="light" expand="lg" className='navbar'>
            <Container>
                <Navbar.Brand href="/">MarketTennis</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Inicio</Nav.Link>
                        <Nav.Link href="/products/hombres">Hombres</Nav.Link>
                        <Nav.Link href="/products/mujeres">Mujeres</Nav.Link>
                        <NavDropdown title="Catálogo" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/products/running">Running</NavDropdown.Item>
                            <NavDropdown.Item href="/products/futbol">Fútbol</NavDropdown.Item>
                            <NavDropdown.Item href="/products/casual">Casual</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/products">
                                Ver todo
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className='me-right'>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/contacto">Contacto</Nav.Link>
                        {/* <Nav.Link><Link to="/quienes_somos">QUIENES SOMO NOSOTROS</Link></Nav.Link> */}
                        <Nav.Link to="/quienes_somos" href="/quienes_somos">Quienes Somos</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComp;