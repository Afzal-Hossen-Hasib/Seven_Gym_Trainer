import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../image/Logo/logo.png'

const Header = () => {
    return (
        <>
  <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark mb-5">
  <Container>
  <Navbar.Brand as={Link} to="/">
      <img src={logo} height='30px' alt="" /> React-Bootstrap
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
      <Nav.Link as={Link} to="/login"> 
        Login
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</>
    );
};

export default Header;