import React from 'react';
import './Login.css';
import { useState } from 'react';
import axios from 'axios';
import {Link, useNavigate } from 'react-router-dom';
import validator from 'validator'

// import { Link } from 'react-router-dom';
// import loginLogo from '../images/loginLogo.png';

function Login(){
    const navigate = useNavigate();
    const [toggleState, setToggleState] = useState(1);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    const [emailFocused, setEmailFocused] = useState(false);  
    const [passwordFocused, setPasswordFocused] = useState(false);  
    const [login,setlogin] = useState(false)
    const toggleTab = (index) => {
    setToggleState(index);

    };
    const handleSubmitting = async (event)=>{
        // event.preventDefault();
        if(!validator.isEmail(email))
            { return alert('Enter valid email')}
        else if(password.length==0 || password.length <8)
            {return alert('enter valid passowrd and must be more than 8 ')}
        else{
            try {
                const user = {email, password}
                setlogin(true);
                const {data}= await axios.post('https://green-planet12.herokuapp.com/api/v1/user/login', user) 
                // const {data}= await axios.post('http://localhost:4000/api/v1/user/login',user)
               // if user login successfully ... direct him to the home page
                 if(data)navigate('/')
                console.log(data)
                //  clear inputs field
               event.target.reset()
           
              } catch (error) {
                   setlogin(false);
                  console.log(error.response.data)
                alert(JSON.stringify(error.response.data))
              }
             
        }
             
       }
    return(
        <div className='loginMain'>
            <div className=' title bg-light shadow p-1 bg-body rounded text-center w-50 m-auto   rounded-pill '>
                <h4>تسجيل الدخول</h4>
            </div>
            <div className='container'>
                <div className='row d-flex justify-content-center'>
                    <div className='col-md-12 col-sm-12 col-lg-6 col-xl-6'>
                            <div className="bloc-tabs mt-4">
                                <button  className={toggleState === 1 ? " btn btn-success text-dark tabs active-tabs" : "tabs"}onClick={() => toggleTab(1)}>Mail</button>
                                <button className={toggleState === 2 ? "btn btn-success text-dark tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>
                                Phone Number
                                </button>
                            </div>
                        <div className="content-tabs ">
                            <div className={toggleState === 1 ? "content  active-content" :   "content"}>
                                <div className='form-group'>
                                  <div className='email'>
                                    <label htmlFor="emailInput" className='fw-bold'>الايميل</label>
                                    <input 
                                        id='emailInput' 
                                        className='form-control w-100' 
                                        type="email" 
                                        required
                                        onBlur={(e)=>setEmailFocused(true)}
                                        focused={emailFocused.toString()}
                                        onChange={event=>{setEmail(event.target.value)} }
                                    />
                                    <span>هذا الايمل ليس صحيح!</span>

                                  </div>
                                  <div className='password'>
                                    <label l htmlFor="passwordInput" className='fw-bold mt-3'>كلمة المرور</label>
                                    <input 
                                        id='passwordInput' 
                                        className='form-control ' 
                                        type="password" 
                                        required
                                        onFocus={(e)=>setPasswordFocused(true)}
                                        focused={passwordFocused.toString()}
                                        onChange={event=>{setPassword(event.target.value)} }
                                    />
                                    <span>كلمة المرور لابد ان تكون مكونه من 8-16 عنصر يحتوى على الاقل 1 حرف, 1رقم, 1 حرف خاص </span>
                                   </div>
                                    <button onClick={handleSubmitting}  className='btn btn-outline-success w-100 mt-3'>{login? 'جاري تسجيل الدخول...':'تسجيل دخول'}</button>
                                    <div className='forgetPasswordLink mt-5 p-3 w-100'>
                                    <p className='text-end'><Link className='text-end' to="#">هل نسيت كلمة السر ?</Link></p>
                                        <h6 className='mt-4 text-end'>لا تمتلك حساب?</h6>
                                        <p className='text-end'><Link to="/register">أنشئ حساب</Link></p>
                                    </div>
                                    </div>
                                    </div>
                                    <div className={toggleState === 2 ? "content  active-content"   :"content"}>
                                
                                    <div className='form-group'>
                                    <label htmlFor="phoneInput" className='fw-bold'>Phone Number</label>
                                    <input className='form-control' id='phoneInput' type="number" />
                                    <label htmlFor="passwordPhoneInput" className='fw-bold mt-3'>Password</label>
                                    <input id='passwordPhoneInput' className='form-control' type="password" />
                                    <button className='btn btn-outline-success w-100 mt-3'>Sign In</button>
                                    <div className='forgetPasswordLink mt-5 p-3 w-100'>
                                        <Link to="#">Forget Your Password ?</Link>
                                        <h6 className='mt-4'>Don't have an account?</h6>
                                        <Link to="/register">Register</Link>
                                    </div>
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


