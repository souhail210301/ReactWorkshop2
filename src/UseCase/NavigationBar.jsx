import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
export default function NavigationBar(){

    const style = {
        textDecoration: "none",
        color: "black"
    }
    const customStyle = {
        textDecoration: "underline",
        color: "red",
        fontWeight: "bold"
    }

    return <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">My Event App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/home"
          style={({isActive})=> (isActive? customStyle: style)}
          >Home</Nav.Link>
          <Nav.Link as={NavLink} to="/events" style={({isActive})=> (isActive? customStyle: style)} >Events</Nav.Link>
          <Nav.Link as={NavLink} to={'/events/add'} >Add Event</Nav.Link>
          <Nav.Link as={NavLink} to={'/favorites'} >Favorites</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
}