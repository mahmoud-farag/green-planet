import React from 'react';
import './Header.css'
import Contact from './../contact/Contact';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
;

function Header(){

  return(

    <div className='header__container'>

      <Navbar className='shadow p-1 bg-body rounded' bg='mylight' variant='light' expand='sm' expand='md'>

        

          <Navbar.Brand>
            <Link className='text-info navbar-brand' to="/">Green Planet</Link>
          </Navbar.Brand>

          <Navbar.Toggle/>

          <Navbar.Collapse>

            <Nav className='me-auto'>

              <Nav.Link href='/map'>
                <span className='links' >Tree Map</span>
              </Nav.Link>

              <Nav.Link href='/faq'>
                <span className='links'>FAQ</span>
              </Nav.Link>

              <Nav.Link href='/contact'>
                <span className='links' >Contact US</span>
              </Nav.Link>

            </Nav>

            <div className='m-auto '>
              <button className='rounded-pill text-light fw-bold  btn btn-info p-2'>Plant a tree</button>

              <button className='loginBtn rounded-pill text-info fw-bold  btn btn-outline-info m-2 p-2'><Link className='a' to='/login'>Login </Link></button>
              <button className='loginBtn rounded-pill text-info fw-bold  btn btn-outline-info m-2 p-2'><Link className='a' to='/location'>admin </Link></button>

            </div>

          </Navbar.Collapse>

        

      </Navbar>

    </div>

  );

};


export default Header;

