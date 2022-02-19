import axios from 'axios';
import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout'

import './Payment.css';


export default function Payment({totalPrices}) {

  const [product, setProduct]=useState({
    name:'trees',
    price:10,
    productby:'green-planet'                                                                       
  })

const handlePayment =async(token) =>{
  const body = {token, product};
  
   try{
    const response = await axios.post('https://green-planet12.herokuapp.com/payment', body)
      // const response = await axios.post('http://localhost:4000/payment', body)
      console.log(response)
   }catch(error){console.error(error)}
  // return fetch('http://localhost:4000/payment',{
  //   method:'POST',
  //   headers,
  //   body:JSON.stringify(body)
  // }).then(res=>{console.log(res)})
  //   .catch(error=> console.error(error))
}


  return <div className='stripe--container'>
    
      <StripeCheckout  
          stripeKey='pk_test_51KOSJwFoM32TQRTMc7JPbzc5pmEvRUSr5NaOeh49y2KXlT7MujDlbdPvyoGDTSgPmnBMr8syppBCTpXLa4FxK7LG00OQdbtyv3'
          token={handlePayment} 
          name='ادفع اونلاين'
          amount= {totalPrices *100}
          >
        <button style={{background:'green'}} className='stripe-btn'>ادفع الان</button>
      </StripeCheckout>
  </div>;
}
