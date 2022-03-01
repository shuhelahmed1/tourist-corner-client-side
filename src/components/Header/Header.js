import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
<Navbar className='text-white' bg="primary" expand="md" collapseOnSelect>
  <Container>
    <Navbar.Brand as={Link} to="/home">Tourist Corner</Navbar.Brand>
    <Navbar.Toggle/>
    <Navbar.Collapse>
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/home">Home</Nav.Link>
        <Nav.Link as={Link} to="/myorders">My Orders</Nav.Link>
        <Nav.Link as={Link} to="/manageorders">Manage Orders</Nav.Link>
        <Nav.Link as={Link} to="/addservices">Add Services</Nav.Link>
        <Nav.Link as={Link} to="/login">Log In</Nav.Link>
        <Nav.Link as={Link} to="/logout">Log Out</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>


        </div>
    );
};

export default Header;