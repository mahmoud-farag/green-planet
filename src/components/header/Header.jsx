import React from 'react';
import './Header.css'
import Contact from './../contact/Contact';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Nav, Navbar } from 'react-bootstrap';

function Header(){

  return(

    <div>

      <Navbar bg='mylight' variant='light' expand='sm' expand='md'>

        <Container>

          <Navbar.Brand>
            <a className='text-info navbar-brand' href="#">Green Planet</a>
          </Navbar.Brand>

          <Navbar.Toggle/>

          <Navbar.Collapse>

            <Nav className='me-auto'>

              <Nav.Link href='#'>
                <span className='links'>Tree Map</span>
              </Nav.Link>

              <Nav.Link href='#'>
                <span className='links'>FAQ</span>
              </Nav.Link>

              <Nav.Link href='#'>
                <span className='links'>Contact US</span>
              </Nav.Link>

            </Nav>

            <div className='m-auto '>
              <button className='rounded-pill text-light fw-bold  btn btn-info p-2'>Plant a tree</button>

              <button className='loginBtn rounded-pill text-info fw-bold  btn btn-outline-info m-2 p-2'>Login / SignUp</button>
            </div>

          </Navbar.Collapse>

        </Container>

      </Navbar>

    </div>

  );

};


export default Header;


