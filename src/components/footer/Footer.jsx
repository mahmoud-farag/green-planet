import React from 'react';
import './Footer.css'


function Footer (){

  return(

    <div>
      
      <div className='container w-75'>

        <div className='row'>

          <div className='col-md-4 col-lg-4 col-xl-4 col-sm-4'>
            <div className='logo'>

              <i class="fa-solid fa-tree"></i>
              <span className='text-success'>Green Planet</span>
              <div className='socialIcons'>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-whatsapp"></i>
                <i class="fa-brands fa-instagram"></i>
              </div>

            </div>
          
          </div>

          <div className='col-md-4 col-lg-4 col-xl-4 col-sm-4'>
            
            <div className='links'>
              <a href="#">Privacy & Policy</a>
            </div>

            <div className='links'>
              <a href="#">Terms & Conditions</a>
            </div>

            <div className='links'>
              <a href="#">Cookies</a>
            </div>

          </div>

          <div className='col-md-4 col-lg-4 col-xl-4 col-sm-4'>

            <div className='links'>
              <a href="#">+96 650 688 31 84</a>
            </div>

            <div className='links'>
              <a href="#">info@greenplanet.com</a>
            </div>

            <div className='address'>
              <p>Asma bint abi bakr Street, Dhahran, Saudi Arabia 34258</p>
            </div>

          </div>

        </div>

      </div>

    </div>

  );

};

export default Footer;
