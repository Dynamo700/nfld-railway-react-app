import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'; 
import '../App.css';

function MyNavbar() {
  return (
    <Navbar bg="black" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to='/' className='navbar_link'>NFLD Railway</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" className='navbar_link'>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/History" className='navbar_link'>History</Nav.Link>
            <Nav.Link as={NavLink} to="/Locomotives" className='navbar_link'>Locomotives</Nav.Link>
            <Nav.Link as={NavLink} to="/TrinityLoop" className='navbar_link'>Trinity Loop</Nav.Link>
            <Nav.Link as={NavLink} to="/PresentDay" className='navbar_link'>Present Day</Nav.Link>

            {/* Add more Nav.Link or Nav.Item components as needed */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;