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
                <span className='links' >الخريطة</span>
              </Nav.Link>

              <Nav.Link href='/faq'>
                <span className='links'>الأسئلة الشائعة</span>
              </Nav.Link>

              <Nav.Link href='/contact'>
                <span className='links' >تواصل معنا</span>
              </Nav.Link>

            </Nav>

            <div className='m-auto '>
              <button className='rounded-pill text-light fw-bold  btn btn-info p-2'>ازرع شجرة </button>

              <button className='loginBtn rounded-pill text-info fw-bold  btn btn-outline-info m-2 p-2'><Link className='a' to='/login'>تسجيل دخول</Link></button>
              <button className='loginBtn rounded-pill text-info fw-bold  btn btn-outline-info m-2 p-2'><Link className='a' to='/location'>ادمن </Link></button>

            </div>

          </Navbar.Collapse>

        

      </Navbar>

    </div>

  );

};


export default Header;

