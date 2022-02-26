import React, { useEffect } from 'react'
import './Profile.css'
import {useDispatch,} from 'react-redux';
import { logout } from '../../../reduxToolkit/features/user';
import {useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export const Profile = () => {
     const dispatch= useDispatch();
     const navigate= useNavigate();
     const handleBtn=()=>{
        try {
            dispatch(logout());
            //   navigate('/')
           } catch (error) {
            alert(JSON.stringify(error))           
           }
     }
     useEffect(() => {
       
     }, [dispatch])
     
            
    return (
    <div className='container_profile'>
      
    
        <button  onClick={handleBtn}className='rounded-pill  fw-bold  btn btn-outline-info m-2 p-2'><a className='a' href='/'>تسجيل خروج</a></button>
    </div>
  )
}
