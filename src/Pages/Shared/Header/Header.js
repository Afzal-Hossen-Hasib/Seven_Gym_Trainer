import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../image/Logo/logo.png'
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth)

    const handleSignOut = () => {
        signOut(auth);
    }
 
    return (
        <>
  <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark mb-5">
  <Container>
  <Navbar.Brand className='d-flex align-items-center' as={Link} to="/">
      <img src={logo} height='40px' width='70px' alt="" /> <span className='ms-3 title'>Fitness <span className='second-title'>Friends</span></span>
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="home#services">Services</Nav.Link> 
      <Nav.Link as={Link} to="/checkout">Checkout</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
      <Nav.Link as={Link} to="/blog">Blogs</Nav.Link>
      {
          user ?
           <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Sing Out</button>
          :
          <Nav.Link as={Link} to="/login"> 
        Login
      </Nav.Link>
      }
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</>
    );
};

export default Header;