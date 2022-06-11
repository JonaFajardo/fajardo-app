import { Navbar, Nav, Container } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"


export const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Inicio</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/Maintenance">Mantenimiento</Nav.Link>
              <Nav.Link as={Link} to="/Customers">Clientes</Nav.Link>
              <Nav.Link as={Link} to="/Mechanics">Mecánicos</Nav.Link>
              <Nav.Link as={Link} to="/Vehicles">Vehículos</Nav.Link>
              <Nav.Link as={Link} to="/Reports">Reportes</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/Contacts">Contactos</Nav.Link>
              <Nav.Link as={Link} to="/Login">Iniciar sesión</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet></Outlet>
    </>
  )
}
export default NavBar