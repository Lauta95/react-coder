import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export const NavBar = () => {
  return (
    <div>
      {/* <Link to='/'>Inicio</Link>
      <Link to='/productos/Acción'>Juegos de Acción</Link>
      <Link to='/productos/Aventura'>Juegos de Aventura</Link>
      <Link to='/productos/Estrategia'>Juegos de Estrategia</Link>
      <Link to='cart'><CartWidget /></Link> */}
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to='/' className='menu'>Inicio</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to='/productos/Acción' className='menu2'>Juegos de acción</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to='/productos/Aventura' className='menu2'>Juegos de aventura</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to='/productos/Estrategia' className='menu2'>Juegos de estrategia</Link>
              </Nav.Link>

            </Nav>
            <Nav>
              <Link to='cart'><CartWidget /></Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div >
  )
}
