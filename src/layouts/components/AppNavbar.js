import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function AppNavbar({navbarTitle}) {
    return (
        <>
            <Navbar expand="xxl" variant="dark" bg="dark" style={{ marginLeft: "0" }}>
                <Container fluid>
                    <Navbar.Brand>{ navbarTitle}</Navbar.Brand>
                    {/* <Nav>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav> */}
                </Container>
            </Navbar>
        </>
    )
};