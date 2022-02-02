import React from 'react';
import './Register.css';
import signupLogo from '../images/signupLogo.jpg';


function Register(){

  return(

    <div className='registerHeader vh-100 d-flex justify-content-center align-items-center'>

      <div className='registerContent bg-light w-75 h-75 rounded clo-md-6 clo-lg-6 col-xl-6 col-sm-6'>

        <div className='container'>
          <div className='row'>

            <div className='registerLogo clo-md-6 clo-lg-6 col-xl-6 col-sm-6'>
              <img className='signupLogo w-100' src={signupLogo} alt="logo" />
            </div>
              
            <div className='clo-md-6 clo-lg-6 col-xl-6 col-sm-6'>
              <h3 className='mb-3'>Create an Account</h3>
              <div className='form-group'>
                <input className='form-control my-2' placeholder='Full Name' type="text" />
                <input className='form-control my-2' placeholder='Email' type="email" />
                <input className='form-control my-2' placeholder='Mobile' type="number" />
                <input className='form-control my-2' placeholder='User Name' type="text" />
                <input className='form-control my-2' placeholder='Password' type="password" />
                <input className='form-control my-2' placeholder='Repeat Password' type="password" />
              </div>
              <button className='btn btn-outline-success w-100 mt-4'>Sign UP</button>
            </div>

          </div>
        </div>

      </div>

    </div>

  )

}

export default Register;