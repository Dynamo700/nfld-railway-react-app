import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import '../App.css';

function MyNavbar() {
  return (
    <Navbar bg="black" expand="lg">
      <Container>
        <Navbar.Brand href="#Home" className='navbar_link'>NFLD Railway</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Home" className='navbar_link'>Home</Nav.Link>
            <Nav.Link href="#History" className='navbar_link'>History</Nav.Link>
            <Nav.Link href="#Locomotives" className='navbar_link'>Locomotives</Nav.Link>
            <Nav.Link href="#TrinityLoop" className='navbar_link'>Trinity Loop</Nav.Link>
            <Nav.Link href="#PresentDay" className='navbar_link'>Present Day</Nav.Link>

            {/* Add more Nav.Link or Nav.Item components as needed */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;