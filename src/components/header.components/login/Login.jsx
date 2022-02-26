import React from 'react';
import './Login.css';
import { useState } from 'react';
import axios from 'axios';
import {Link, useNavigate } from 'react-router-dom';
import validator from 'validator'


/*______REDUX___________*/
import {useSelector, useDispatch} from 'react-redux';
import {logIn } from '../../../reduxToolkit/features/user.js'
/*______REDUX___________*/


function Login(){
    const navigate = useNavigate();
    const [toggleState, setToggleState] = useState(1);

    /*____FORM INPUTS STATES____*/
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    const [emailFocused, setEmailFocused] = useState(false);  
    const [passwordFocused, setPasswordFocused] = useState(false);  
    /*____FORM INPUTS STATES____*/

    /*____REDUX_____*/
     const dispatch= useDispatch();
     const userReducer = useSelector(state=>state.user);
    /*____REDUX_____*/
    // to change between email&password form and phoneNumber&password form
    const toggleTab = (index) => {setToggleState(index)};
    const handleSubmitting = async (event)=>{
        // event.preventDefault();
        
        // form validation
        if(!validator.isEmail(email))
            { return alert('Enter valid email')}
        else if(password.length==0 || password.length <8)
            {return alert('enter valid passowrd and must be more than 8 ')}
        else{
            try {

                const user = {email, password}
                //  dispatch login action using RTK
                const isSuccessed=  await  dispatch(logIn(user))
                isSuccessed && navigate('/');
           
              } catch (error) {
                alert(JSON.stringify(error))
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
                                    <button onClick={handleSubmitting}  className='btn btn-outline-success w-100 mt-3'>{userReducer.isLoading? 'جاري تسجيل الدخول...':'تسجيل دخول'}</button>
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


