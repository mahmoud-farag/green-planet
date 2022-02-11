import React from 'react';
import './Login.css';
import { useState } from 'react';
import axios from 'axios';
import {useNavigate } from 'react-router-dom';

// import { Link } from 'react-router-dom';
// import loginLogo from '../images/loginLogo.png';




function Login(){
    const navigate = useNavigate();
    const [toggleState, setToggleState] = useState(1);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 

    const toggleTab = (index) => {
    setToggleState(index);

    };
    const handleSubmitting = async (event)=>{
        event.preventDefault();
             try {
               const user = {email, password}
               const {data}= await axios.post('http://localhost:4000/api/v1/user/login', user) 
              // if user login successfully ... direct him to the home page
                if(data)navigate('/')
               console.log(data)
            
             } catch (error) {
               alert(JSON.stringify(error))
             }
            //  clear inputs field
             setEmail('');
             setPassword('');
           
       }
    return (

<div className='loginMain vh-100 d-flex justify-content-center '>

    <div className='w-75'>

        <div className="container mt-5 w-50 col-md-6 col-lg-6 col-xl-6 col-sm-6">

            <div className='bg-light text-center m-auto w-100  mt-1 rounded-pill p-3 col-md-6 col-lg-6 col-xl-6 col-sm-6'>
                <h4>Sign In to Green Planet</h4>
            </div>

            <div className="bloc-tabs mt-4">
            <button  className={toggleState === 1 ? " btn btn-success text-dark tabs active-tabs" : "tabs"}onClick={() => toggleTab(1)}>
                Mail      
            </button>
            <button className={toggleState === 2 ? "btn btn-success text-dark tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>
            Phone Number
            </button>
            </div>

            <div className="content-tabs">

            <div className={toggleState === 1 ? "content  active-content" : "content"}>
                <div className='form-group'>
                    <label htmlFor="emailInput" className='fw-bold'>Email</label>
                    <input 
                        id='emailInput' 
                        className='form-control w-100' 
                        type="email" 
                        onChange={event=>{setEmail(event.target.value)} }

                    />

                    <label htmlFor="passwordInput" className='fw-bold mt-3'>Password</label>
                    <input 
                        id='passwordInput' 
                        className='form-control' 
                        type="password" 
                        onChange={event=>{setPassword(event.target.value)} }

                    />

                    <button onClick={handleSubmitting} className='btn btn-outline-success w-100 mt-3'>Sign In</button>

                    <div className='forgetPasswordLink mt-5 p-3 w-100'>
                        <a  href="#">Forget Your Password ?</a>
                        <h6 className='mt-4'>Don't have an account?</h6>
                        <a href="/register">Register</a>
                    </div>
                </div>
            </div>

            <div className={toggleState === 2 ? "content  active-content" : "content"}>
                
                <div className='form-group'>
                    <label htmlFor="phoneInput" className='fw-bold'>Phone Number</label>
                    <input 
                        className='form-control' 
                        id='phoneInput' 
                        type="number" 
                    />

                    <label htmlFor="passwordPhoneInput" className='fw-bold mt-3'>Password</label>
                    <input id='passwordPhoneInput' className='form-control' type="password" />

                    <button className='btn btn-outline-success w-100 mt-3'>Sign In</button>

                    <div className='forgetPasswordLink mt-5 p-3 w-100'>
                        <a href="#">Forget Your Password ?</a>
                        <h6 className='mt-4'>Don't have an account?</h6>
                        <a href="#">Register</a>
                    </div>
                </div>

            </div>

            </div>

        </div> 

    </div>

</div>

    );

};






export default Login;