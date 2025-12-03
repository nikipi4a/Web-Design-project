import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'; 
import { LinkContainer } from 'react-router-bootstrap';

const AppNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="shadow-lg"> 
      <Container>
        <Navbar.Brand 
          href="/" 
          className="fw-bolder text-danger fs-3 text-uppercase"
          style={{ letterSpacing: '1.5px' }} 
        >
          Apex Auto
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> 
            <LinkContainer to="/">
              <Nav.Link>Начало</Nav.Link>
            </LinkContainer>
            
            <LinkContainer to="/inventory">
              <Nav.Link>Автомобили</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/contact">
              <Nav.Link>Контакти</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;