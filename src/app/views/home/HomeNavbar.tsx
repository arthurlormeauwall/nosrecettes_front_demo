import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router"

export const HomeNavbar = () => {
  return <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">Nos recettes</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/shoppinglist">Shopping list</Nav.Link>
          <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
          <Nav.Link as={Link} to="/recipes">Recipes</Nav.Link>
          <Nav.Link as={Link} to="/item">Items</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
}