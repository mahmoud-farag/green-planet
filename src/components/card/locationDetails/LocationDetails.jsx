import React from 'react';
import './LocationDetails.css'

export default function LocationDetails() {


    
  return <div>

  <div></div>

  <div className="add w-50 m-auto col-md-12 col-sm-12 col-lg-12 col-xl-12">

      <h3 className='text-center'>Select the number of trees to plant</h3>
      <div className="line mt-1"></div>
      <div className='mt-1 d-flex justify-content-center'>
          <div className="select m-2 text-center">1</div>
          <div className="select m-2 text-center">5</div>
          <div className="select m-2 text-center">10</div>
          <div className="select m-2 text-center">50</div>
          <div className="select m-2 text-center">100</div>
          <div className="select m-2 text-center">Other</div>
      </div>
      <div className="form-group">
          <input className='form-control w-100 m-auto' placeholder='Tree Name' type="text" name="" id="" />
      </div>

      <div className='m-auto mt-2 w-100'>
          <button className='btn btn-info w-100 text-light mt-1'>Plant a tree</button>
      </div>
          

  </div>


  <div className="container w-75 mt-4">
      <div className="row m-2">

          <div className='col-md-6 col-sm-12 col-lg-4 col-xl-4'>
              <img className='w-100' src={process.env.PUBLIC_URL+'/imgs/Neem.jpeg'} alt="" />
              <div className='tree-details'>
                  <h6>شجرة النيم</h6>
                  <h6>45﷼</h6>
                  <button className='btn btn-info text-light rounded-pill fs-5'>More Details</button>
              </div>
          </div>

          <div className='col-md-6 col-sm-12 col-lg-4 col-xl-4'>
              <img className='w-100' src={process.env.PUBLIC_URL+'/imgs/fekass.jpeg'} alt="" />
              <div className='tree-details'>
                  <h6>فيكس لسان العصفور</h6>
                  <h6>50﷼</h6>
                  <button className='btn btn-info text-light rounded-pill fs-5'>More Details</button>
              </div>
          </div>

          <div className='col-md-6 col-sm-12 col-lg-4 col-xl-4'>
              <img className='w-100' src={process.env.PUBLIC_URL+'/imgs/bonsiana.jpeg'} alt="" />
              <div className='tree-details'>
                  <h6>البونسيانا</h6>
                  <h6>55﷼</h6>
                  <button className='btn btn-info text-light rounded-pill fs-5'>More Details</button>
              </div>
          </div>

          <div className='col-md-6 col-sm-12 col-lg-4 col-xl-4'>
              <img className='w-100' src={process.env.PUBLIC_URL+'/imgs/elab5.jpg'} alt="" />
              <div className='tree-details'>
                  <h6>شجرة اللبخ</h6>
                  <h6>45﷼</h6>
                  <button className='btn btn-info text-light rounded-pill fs-5'>More Details</button>
              </div>
          </div>

          <div className='col-md-6 col-sm-12 col-lg-4 col-xl-4'>
              <img className='w-100' src={process.env.PUBLIC_URL+'/imgs/akasia.jpeg'} alt="" />
              <div className='tree-details'>
                  <h6>أكاسيا جلوكا.</h6>
                  <h6>45﷼</h6>
                  <button className='btn btn-info text-light rounded-pill fs-5'>More Details</button>
              </div>
          </div>
      </div>
  </div>

</div>

//<div className='location__container'> 
      
//           <section className="top">
//             <div className="custom_map">map</div>
           
            
//             <figure>
//                 <img src={process.env.PUBLIC_URL+'/imgs/1.jpg'}></img>
               

//             </figure>  
//         </section> 
//         <section className="meddile">
//             <h2 className="title">ميناء جدة الاسلامي</h2>
//             <h3>جدة, السعودية</h3>
//             <p>عدد الأشجار التي زُرعت 18 / 5000</p>
//            <progress>progress</progress>
//            <div>
//                <span className='one'>9691209.22 m²</span>
//                <span className="two">18 عدد الأشجار التي زُرعت</span>
//            </div>
//         </section> 
//          <section className="last">
//             <div className="left">
//                 <h3>كم عدد الأشجار التي تريد زراعتها؟</h3>
//             </div>
//             <div className="right">
//                 <h3>اختر الشجرة</h3>
//             </div>
//         </section>  
//   </div>;
}
