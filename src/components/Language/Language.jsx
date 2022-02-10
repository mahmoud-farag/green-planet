import React from 'react';

import './Language.css';



function Language(){


    const ar = () =>{

        let ar = document.getElementById("content").innerHTML = "مرحبا بك فى النص باللغة العربية"; 

    }

    const en = () =>{

        let en = document.getElementById("content").innerHTML = "welcome to english text";

    }


    return(

        <div>

            
            <h2 className='mainAddress text-center fs-3'>
                <span onClick={ar} className='ar' id='ar'>AR</span>
                <span onClick={en} className='en' id='en'>EN</span>
            </h2>

            <div id='content' className='content bg-danger text-light w-50 text-center m-auto mt-5'>
                welcome to english text
            </div>

        </div>

    )

}

export default Language;