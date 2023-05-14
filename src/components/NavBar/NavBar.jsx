import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export const NavBar = () => {
  return (
    <div className='menu'>
      <Link to='/'>Inicio</Link>
      <Link to='/productos/Acción'>Juegos de Acción</Link>
      <Link to='/productos/Aventura'>Juegos de Aventura</Link>
      <Link to='/productos/Estrategia'>Juegos de Estrategia</Link>
      <Link to='cart'><CartWidget /></Link>
      {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link to='/'>Inicio</Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href='/productos/Acción'>Juegos de acción</Nav.Link>
              <Nav.Link href='/productos/Aventura'>Juegos de aventura</Nav.Link>
              <Nav.Link href='/productos/Estrategia'>Juegos de estrategia</Nav.Link>
            </Nav>
            <Nav>
              <Link to='cart'><CartWidget /></Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
    </div>
  )
}
