import axios from 'axios';
import React ,{useState} from 'react';
import validator from 'validator'


import './Register.css';
import {useNavigate } from 'react-router-dom';
// import signupLogo from '../images/signupLogo.jpg';

function Register(){
  
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    const [confirmPassword, setConfirmPassword] = useState('');
    const [nameFocused, setNameFocused] = useState(false);  
    const [emailFocused, setEmailFocused] = useState(false);  
    const [passwordFocused, setPasswordFocused] = useState(false);  
    const [confirmPasswordFocused, setConfirmPasswordFocused] = useState(false);  
    const [submitting,setSubmitting]= useState(false);

    const handleSubmitting = async (event)=>{
    //  event.preventDefault();

        if(!name)
          { return alert('you have to provide a userName')}
        else if(!validator.isEmail(email))
          {return alert('plz Enter valid email')}
        else if(password.length < 8)
          {return alert('the password must be more than 8')}
        else if(password !== confirmPassword)
          {return alert('password not matched with confirm password plz enter valid password')}
        else{
          console.log('else clause')
            //  create user account into db 
            try {
              const user= {
                name,
                email,
                password
              }  
              setSubmitting(true)
              const {data}= await axios.post('https://green-planet12.herokuapp.com/api/v1/user/register', user) 
              // if user regsiter successfully ... direct him to the home page
              if(data){
                navigate('/')
              
              }
              console.log(data)
               // alert(JSON.stringify(data))
           
             } catch (error) {
              setSubmitting(false)
              alert(JSON.stringify(error))
            }
         }    
          // clear inputs field
          event.target.reset()
          // setName('');
          // setEmail('');
          // setPassword('');
          // setConfirmPassword('');
    
    }
  
  return(

    <div className='registerHeader vh-100 d-flex justify-content-center align-items-center'>

      <div className='registerContent bg-light w-75 h-75 rounded clo-md-6 clo-lg-6 col-xl-6 col-sm-6'>

        <div className='container register__container'>
          <div className='row'>

            <div className='registerLogo clo-md-6 clo-lg-6 col-xl-6 col-sm-6'>
              {/* <img className='signupLogo w-100'  alt="logo" /> */}
            </div>
              
            <div className='clo-md-6 clo-lg-6 col-xl-6 col-sm-6'>
              <h3 className='mb-3  text-center '>انشئ حساب جديد</h3>
              <div className='form-group'>
                <div className='userName'>
                  <input 
                    className='form-control my-2'  
                    name='name'  
                    placeholder='اسم المستخدم' 
                    type="text"
                    pattern='^[A-za-z0-9]{3,16}$'
                    required
                    onBlur={e=>setNameFocused(true)}
                    focused={nameFocused.toString()}
                    onChange={event=>{setName(event.target.value)} }
                  />
                  <span>الاسم لابد ان يكون مكون من 3-16 حرف  </span>
                </div>
                <div className='email'>
                  <input 
                    className='form-control my-2' 
                    name='email' 
                    placeholder='ادخل الايميل' 
                    type="email"
                    onBlur={e=>setEmailFocused(true)}
                    focused={emailFocused.toString()}
                    required
                    onChange={event=>{setEmail(event.target.value)} }
                  />
                  <span>هذا الايمل ليس صحيح!</span>
                </div>
                <div className='password'>
                  <input 
                    className='form-control my-2 ' 
                    name='password'
                    placeholder='كلمة المرور' 
                    type="password"
                    pattern='^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$'
                    required
                    onBlur={e=>setPasswordFocused(true)}
                    focused={passwordFocused.toString()}
                    onChange={event=>{setPassword(event.target.value)} }
                  />
                  <span>كلمة المرور لابد ان تكون مكونه من 8-16 عنصر يحتوى على الاقل 1 حرف, 1رقم, 1 حرف خاص </span>
                </div>
                <div className='confirmPassword'>
                  <input 
                    className='form-control my-2' 
                    placeholder='تأكيد كلمه المرور' 
                    type="password"
                    pattern= {password}
                    required
                    onBlur={e=>setConfirmPasswordFocused(true)}
                    onFocus={e=>setConfirmPasswordFocused(true)}
                    focused={confirmPasswordFocused.toString()}
                    onChange={event=>{setConfirmPassword(event.target.value)} }
                  />
                  <span>الباسورد غير متطابق</span>
                </div>
              </div>
              
              <button onClick={handleSubmitting} className='btn btn-outline-success w-100 mt-4'>{submitting? 'new User is Creating...':'Sign Up'}</button>
            </div>

          </div>
        </div>

      </div>

    </div>

  )

}

export default Register;