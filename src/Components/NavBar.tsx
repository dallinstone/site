
import { Container, Nav, NavDropdown, NavbarBrand } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
  return (

    <Navbar style={{ backgroundColor: "var(--darkteal)", position: "sticky", top: 0 }} data-bs-theme="dark" expand="lg">
      <Container>
        <Navbar.Brand>Dallin Stone</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ width: "2em" }} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto white">
            <Nav.Link href="home">
              <span>
                <b>Home</b>
              </span>
            </Nav.Link>
            <Nav.Link href="experience">
              <span>
                <b>Experience</b>
              </span>
            </Nav.Link>
            <Nav.Link href="contact">
              <span>
                <b>Contact</b>
              </span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}