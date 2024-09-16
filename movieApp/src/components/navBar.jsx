import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export function NavBar(){
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Movie App - Find Your Next Flick</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <NavDropdown title="Genres" id="basic-nav-genre">
                        <NavDropdown.Item>Action</NavDropdown.Item>
                        <NavDropdown.Item>Adventure</NavDropdown.Item>
                        <NavDropdown.Item>Comedy</NavDropdown.Item>
                        <NavDropdown.Item>Horror</NavDropdown.Item>
                        <NavDropdown.Item>Sci-Fi</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

