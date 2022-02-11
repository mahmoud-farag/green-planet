import axios from 'axios';
import React from 'react';
import { useState } from 'react/cjs/react.development';
import './Register.css';
import {useNavigate } from 'react-router-dom';
// import signupLogo from '../images/signupLogo.jpg';


function Register(){
  
     const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    const [confirmPassword, setConfirmPassword] = useState('');
      
           
    const handleSubmitting = async (event)=>{
     event.preventDefault();
        if(password != confirmPassword) alert('password not matched with confirm password plz enter valid password');
        else{
            //  create user account into db 
          try {
            const user= {
              name,
              email,
              password
            }  
            const {data}= await axios.post('http://localhost:4000/api/v1/user/register', user) 
            // if user regsiter successfully ... direct him to the home page
            if(data)navigate('/')
            console.log(data)
            // alert(JSON.stringify(data))
         
          } catch (error) {
            alert(JSON.stringify(error))
          }
          // clear inputs field
          setName('');
          setEmail('');
          setPassword('');
          setConfirmPassword('');
        }
    }
  
  return(

    <div className='registerHeader vh-100 d-flex justify-content-center align-items-center'>

      <div className='registerContent bg-light w-75 h-75 rounded clo-md-6 clo-lg-6 col-xl-6 col-sm-6'>

        <div className='container'>
          <div className='row'>

            <div className='registerLogo clo-md-6 clo-lg-6 col-xl-6 col-sm-6'>
              <img className='signupLogo w-100'  alt="logo" />
            </div>
              
            <div className='clo-md-6 clo-lg-6 col-xl-6 col-sm-6'>
              <h3 className='mb-3'>Create an Account</h3>
              <div className='form-group'>
                <input 
                  className='form-control my-2'  
                  name='name'  
                  placeholder='User Name' 
                  type="text" 
                  onChange={event=>{setName(event.target.value)} }
                />
                <input 
                  className='form-control my-2' 
                  name='email' 
                  placeholder='Email' 
                  type="email" 
                  onChange={event=>{setEmail(event.target.value)} }
                />
                <input 
                  className='form-control my-2' 
                  name='password'  
                  placeholder='Password' 
                  type="password" 
                  onChange={event=>{setPassword(event.target.value)} }
                />
                <input 
                  className='form-control my-2' 
                  placeholder='Repeat Password' 
                  type="password" 
                  onChange={event=>{setConfirmPassword(event.target.value)} }
                />
              </div>
              <button onClick={handleSubmitting} className='btn btn-outline-success w-100 mt-4'>Sign UP</button>
            </div>

          </div>
        </div>

      </div>

    </div>

  )

}

export default Register;