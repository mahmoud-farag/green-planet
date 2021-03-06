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

    <div className='registerHeader vh-100 '>

        <div className='register__container'>
              <h3 className='mb-3  text-center '>???????? ???????? ????????</h3>
              <div className='form-group register'>
                <div className='userName '>
                  <input 
                    className='form-control my-2'  
                    name='name'  
                    placeholder='?????? ????????????????' 
                    type="text"
                    pattern='^[A-za-z0-9]{3,16}$'
                    required
                    onBlur={e=>setNameFocused(true)}
                    focused={nameFocused.toString()}
                    onChange={event=>{setName(event.target.value)} }
                  />
                  <span>?????????? ???????? ???? ???????? ???????? ???? 3-16 ??????  </span>
                </div>
                <div className='email'>
                  <input 
                    className='form-control my-2' 
                    name='email' 
                    placeholder='???????? ??????????????' 
                    type="email"
                    onBlur={e=>setEmailFocused(true)}
                    focused={emailFocused.toString()}
                    required
                    onChange={event=>{setEmail(event.target.value)} }
                  />
                  <span>?????? ???????????? ?????? ????????!</span>
                </div>
                <div className='password'>
                  <input 
                    className='form-control my-2 ' 
                    name='password'
                    placeholder='???????? ????????????' 
                    type="password"
                    pattern='^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$'
                    required
                    onBlur={e=>setPasswordFocused(true)}
                    focused={passwordFocused.toString()}
                    onChange={event=>{setPassword(event.target.value)} }
                  />
                  <span>???????? ???????????? ???????? ???? ???????? ?????????? ???? 8-16 ???????? ?????????? ?????? ?????????? 1 ??????, 1??????, 1 ?????? ?????? </span>
                </div>
                <div className='confirmPassword'>
                  <input 
                    className='form-control my-2' 
                    placeholder='?????????? ???????? ????????????' 
                    type="password"
                    pattern= {password}
                    required
                    onBlur={e=>setConfirmPasswordFocused(true)}
                    onFocus={e=>setConfirmPasswordFocused(true)}
                    focused={confirmPasswordFocused.toString()}
                    onChange={event=>{setConfirmPassword(event.target.value)} }
                  />
                  <span>???????????????? ?????? ????????????</span>
                </div>
                <button onClick={handleSubmitting} className='btn btn_register  btn-outline-success  mt-4'>{submitting? 'new User is Creating...':'Sign Up'}</button>

              </div>
              

        </div>



    </div>

  )

}

export default Register;