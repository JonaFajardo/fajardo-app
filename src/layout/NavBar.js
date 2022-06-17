import { Navbar, Nav, Container, NavLink } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"
import useAuth from "../auth/useAuth";

export const NavBar = (props) => {
  const isLogged = props.name;
  const auth = useAuth();

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Inicio</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            {!isLogged===null && (
              <>
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/Customers">Clientes</Nav.Link>
                  <Nav.Link as={Link} to="/Reports">Reportes</Nav.Link>
                </Nav>
                <Nav>
                  <Nav.Link as={Link} to="/Contacts">Contactos</Nav.Link>
                  <Nav.Link as={Link} to="/Logout">Cerrar sesión</Nav.Link>
                </Nav>
              </>)}
            {!isLogged && (
              <>
                 <Nav className="me-auto">
                  <Nav.Link ></Nav.Link>
                  <Nav.Link ></Nav.Link>
                </Nav>
                <Nav>
                  <Nav.Link as={Link} to="/Contacts">Contactos</Nav.Link>
                  <Nav.Link as={Link} to="/Login">Iniciar sesión</Nav.Link>
                </Nav>
              </>)}

          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet></Outlet>
    </>
  )
}
export default NavBar