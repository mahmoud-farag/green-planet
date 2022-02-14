import React from 'react';
import './LocationDetails.css'

export default function LocationDetails() {
  return <div className='location__container'>
      
          <section className="top">
            <div className="custom_map">map</div>
           
            
            <figure>
                <img src={process.env.PUBLIC_URL+'/imgs/1.jpg'}></img>
               

            </figure>  
        </section> 
        <section className="meddile">
            <h2 className="title">ميناء جدة الاسلامي</h2>
            <h3>جدة, السعودية</h3>
            <p>عدد الأشجار التي زُرعت 18 / 5000</p>
           <progress>progress</progress>
           <div>
               <span className='one'>9691209.22 m²</span>
               <span className="two">18 عدد الأشجار التي زُرعت</span>
           </div>
        </section> 
         <section className="last">
            <div className="left">
                <h3>كم عدد الأشجار التي تريد زراعتها؟</h3>
            </div>
            <div className="right">
                <h3>اختر الشجرة</h3>
            </div>
        </section>  
  </div>;
}
