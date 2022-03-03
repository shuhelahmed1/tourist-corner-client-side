import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';
const Header = () => {
  const {user,logout} = useAuth();
    return (
        <div>
<Navbar className='text-white' bg="primary" expand="md" collapseOnSelect>
  <Container>
    <Navbar.Brand style={{color: 'white'}} as={Link} to="/home">Tourist Corner</Navbar.Brand>
    <Navbar.Toggle/>
    <Navbar.Collapse>
      <Nav className="me-auto">
        <Nav.Link style={{color: 'white'}} as={Link} to="/home">Home</Nav.Link>
        
        {
          user.email && <Nav.Link style={{color: 'white'}} as={Link} to="/myorders">My Orders</Nav.Link>
        }
        {
          user.email && <Nav.Link style={{color: 'white'}} as={Link} to="/manageorders">Manage Orders</Nav.Link>
        }    
        {
          user.email && <Nav.Link style={{color: 'white'}} as={Link} to="/addoffer">Add Offer</Nav.Link>
        }
        
        {
          user.email ? <button style={{padding: '0',marginRight: '10px'}} className='btn btn-danger' onClick={logout}>Log Out</button> : <Nav.Link style={{color: 'white'}} as={Link} to="/login">Log In</Nav.Link>
        }

        {
          user.email && <small>User: {user.displayName}</small>
        }
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;