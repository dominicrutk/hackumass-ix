import './NavBar.css';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar fluid bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Internet of Utilities (IOU)</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="https://hackumass.com/" target="_ ">HackUmass</Nav.Link>
            <Nav.Link href="https://github.com/dominicrutk/hackumass-ix" target="_ ">GitHub</Nav.Link>
            <Nav.Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_ ">Source Code</Nav.Link>
            <Nav.Link href="https://mlh.io/" target="_ ">Major League Hacking</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
