import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';



const initialValue=localStorage.getItem('user')? 
                   JSON.parse(localStorage.getItem('user')):{user:{email:'', password:''}, isLoading:false};


const userSlice =  createSlice({
    name:'user',
    initialState:initialValue,
    reducers:{
      loginSuccess: (state, action)=>{ 
        state.user= action.payload.user;
        state.isLoading= action.payload.isLoading
        localStorage.setItem('user', JSON.stringify(action.payload))
      },
       logoutSuccess:()=>{  localStorage.removeItem('user') },
    },
}) 

// export the main user reducer
export default userSlice.reducer;
 const {loginSuccess, logoutSuccess}= userSlice.actions

export const logIn = ({email, password})=>  async dispatch=>{

               try {
                const user={email, password}
                dispatch(loginSuccess({user:{email:'', password:''}, isLoading:true}));
                console.log(user)
                const {data}= await axios.post('https://green-planet12.herokuapp.com/api/v1/user/login', user) 
                 console.log(data)
                if(data){
                  dispatch(loginSuccess({user:user, isLoading:false}))
                  //   if successeded return true
                  return true
                } 
               } catch (error) {
                 dispatch(loginSuccess({user:{email:'', password:''}, isLoading:false}))
                console.log(error.response.data)
                alert(JSON.stringify(error.response.data))
               }
                
}
export const logout =()=> dispatch=> {
  console.log('before logout')
 dispatch(logoutSuccess())
 console.log('after logout')
}











