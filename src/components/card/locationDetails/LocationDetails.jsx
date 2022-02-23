import React, {useState,useEffect}from 'react';
import { Link, useParams } from 'react-router-dom';
import './LocationDetails.css';
import '../../../App.css'
import Payment from '../../payment/Payment.jsx'
import axios from 'axios';
import {Buffer} from 'buffer';

function LocationDetails(){
       const params= useParams();
       const [showPayment, setShowPayment]= useState(false); 
       const [treeName, setTreeName]= useState('');
       const [treeCount, setTreeCount]= useState(0);
       const [totalPrices, setTotalPrices]=useState(0);
       const [location, setLocation] = useState({});  
       const [inputFocused, setInputFocused]=useState(false)
       const [error, setError]=useState(false)

       const treesArabicNames=['البونسيانا','النيم','فيكس لسان العصفور','اللبخ','أكاسيا جلوكا'];
       const treesPrices=[55,45,50,45,45];
     
        const btnHandling=(event)=>{
               
            if (treeName=== treesArabicNames[0])  setTotalPrices(treeCount * treesPrices[0])
            if (treeName=== treesArabicNames[1])  setTotalPrices(treeCount * treesPrices[1])
            if (treeName=== treesArabicNames[2])  setTotalPrices(treeCount * treesPrices[2])
            if (treeName=== treesArabicNames[3])  setTotalPrices(treeCount * treesPrices[3])
            if (treeName=== treesArabicNames[4])  setTotalPrices(treeCount * treesPrices[4]) 
            
            if(treeCount && treeName) {
                setShowPayment(true)

            }else{
              setError(true)
            }
        }

          const getLocation= async()=>{

        try{
            const {data} = await axios.get(`https://green-planet12.herokuapp.com/api/v1/location/${params.id}`);

        //   const {data} = await axios.get(`http://localhost:4000/api/v1/location/${params.id}`);
         
          if(data){
            console.log(data)
            setLocation(data.location)   
           
          }else{
              alert('no data to display')
          }
          
       }catch(error){
        console.log(error)
       }
          }

          useEffect(()=>{
            getLocation();
          },[])
    return(

        <div>

            {location? ( <div className="container top_section">
                <div className="row ">

                    <div className='mainAdd col-md-12 col-sm-12 col-lg-6 col-xl-6'>
                         <img className='img-fluid'  src={process.env.PUBLIC_URL+'/imgs/2.jpeg'} alt="" /> 
                    </div>

                    <div className='mainAdd col-md-12 col-sm-12 col-lg-6 col-xl-6'>
                        <h4>{location.title}</h4>
                        {/* <p>Lorem, ipsum dolor.</p> */}
                        
                        <div className='fw-bold'>
                            <div>
                                <span className='fw-5 '>عدد الأشجار التي زُرعت</span>
                                <span className='text-success mx-1'>{location.totalPlantedTrees} / {location.maxTrees}</span>
                            </div>
                            <progress className='prog' value={location.totalPlantedTrees} max={location.maxTrees} ></progress>
                        </div>

                        <div className="icons mt-3">
                           <div className="icon1">
                                <img className='img-fluid' src={process.env.PUBLIC_URL+'/imgs/meter.svg'} alt="" />
                                <span className=' fw-bold'>7296097.82 m²</span>
                           </div>
                            <div className="icon2">
                                <img className='img-fluid' src={process.env.PUBLIC_URL+'/imgs/tree.svg'} alt="" />
                                <span className='fw-bold'>{location.totalPlantedTrees} : الأشجار التي زُرعت</span>
                            </div>
                        </div>

                        <div className='m-auto  w-75'>
                            <button className='mt-4 w-100 text-light btn btn-info'>MAP</button>
                        </div>

                        
                    </div>

                </div>
            </div>) 
            :  
            
            <h3>loading..</h3>}

            <div className="container trees_container text-center  mt-4">
                <div className="row">

                    <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4'>

                        <div className='item overflow-hidden position-relative'>
                            <img className='img-fluid' src={process.env.PUBLIC_URL+'/imgs/bonsiana.jpeg'} alt="" />
                            <div className='img-overlay d-flex justify-content-center align-items-center '>

                                <div className="overlay-innero">
                                
                                    <p className='text-dark'>البونسيانا</p>
                                    <p className='text-dark'>55﷼</p>
                                    
                                    <button className='btn btn-info'><Link className='btn' to='/tree/1'>تفاصيل</Link></button>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4'>

                        <div className='item overflow-hidden position-relative'>
                            <img className='img-fluid' src={process.env.PUBLIC_URL+'/imgs/Neem.jpeg'} alt="" />
                            <div className='img-overlay d-flex justify-content-center align-items-center '>

                                <div className="overlay-innero">
                                
                                    <p className='text-dark'>شجرة النيم</p>
                                    <p className='text-dark'>45﷼</p>
                                    
                                    <button className='btn btn-info'><Link className='btn' to='/tree/2'>تفاصيل</Link> </button>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4'>

                        <div className='item overflow-hidden position-relative'>
                            <img className='img-fluid' src={process.env.PUBLIC_URL+'/imgs/fekass.jpeg'} alt="" />
                            <div className='img-overlay d-flex justify-content-center align-items-center '>

                                <div className="overlay-innero">
                                
                                    <p className='text-dark'>فيكس لسان العصفور</p>
                                    <p className='text-dark'>50﷼</p>
                                    
                                    <button className='btn btn-info'><Link className='btn'  to='/tree/3'>تفاصيل</Link></button>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4'>

                        <div className='item overflow-hidden position-relative'>
                            <img className='img-fluid' src={process.env.PUBLIC_URL+'/imgs/elab5.jpg'} alt="" />
                            <div className='img-overlay d-flex justify-content-center align-items-center '>

                                <div className="overlay-innero">
                                
                                    <p className='text-dark'>شجرة اللبخ</p>
                                    <p className='text-dark'>45﷼</p>
                                    
                                    <button className='btn btn-info'><Link className='btn' to='/tree/4'>تفاصيل</Link></button>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4'>

                        <div className='item overflow-hidden position-relative'>
                            <img className='img-fluid' src={process.env.PUBLIC_URL+'/imgs/akasia.jpeg'} alt="" />
                            <div className='img-overlay d-flex justify-content-center align-items-center '>

                                <div className="overlay-innero">
                                
                                    <p className='text-dark'>أكاسيا جلوكا</p>
                                    <p className='text-dark'>45﷼</p>
                
                                    <button className='btn btn-info'><Link className='btn'  to='/tree/5'>تفاصيل</Link></button>
                                </div>

                            </div>
                        </div>

                    </div>

                    </div>

               
            </div>

            <div className="add mt-3  m-auto col-md-12 col-sm-12 col-lg-12 col-xl-12">

                <h3 className='text-center'>كم عدد الأشجار التي تريد زراعتها؟</h3>
                <div className="line mt-1"></div>
                <div className='mt-1'>
                     <input 
                          className='form-control w-100 m-auto'
                          placeholder='كم عدد الأشجار التي تريد زراعتها؟' 
                          type="number" 
                          name="" 
                          required
                          onBlur={()=>setInputFocused(true)}
                          focused={inputFocused.toString()}
                          onChange={event=> setTreeCount(+event.target.value)}
                          id="" />
                          <span className='error'>لابد من ادخال عدد الاشجار</span>

                </div>
                <div className='mt-3'>


                   <form>
                   <select style={{width:'100%', textAlign:'center'}} name='trees' onChange={event=>setTreeName(event.target.value)} value={treeName}>
                        <option value="">اختر الشجرة</option>
                        <option value={treesArabicNames[0]} >البونسيانا</option>
                        <option value={treesArabicNames[1]} > النيم</option>
                        <option value={treesArabicNames[2]} >فيكس لسان العصفور</option>
                        <option value={treesArabicNames[3]} > اللبخ</option>
                        <option value={treesArabicNames[4]}>أكاسيا جلوكا</option>
                        {/* <option value="">#</option> */}
                    </select>
                   </form>

                </div>

                {/* <div className='mt-2'>
                    <input type="checkbox" />
                    <span> I want to gift this tree to someone.</span>
                </div> */}

                <div className='m-auto mt-2 w-100'>
                    <button  
                        onClick={btnHandling}
                        className='btn btn-info w-100 text-light mt-1'>ازرع شجرة </button>
                </div>
            </div>
           {
           
           showPayment&& treeName && treeCount>0? (
             <div className='payment_parent_container'>
                <section className="payment__container">
                    <div className="summary">
                        <h5 className='title' >الشجرة: <span>{treeName}</span></h5>
                        <p>الموقع:  <span> {location.title}</span></p>
                        <p>الكمية:  <span> {treeCount} شجرة</span></p>
                        <p>المجموع الكلي: <span> {totalPrices} ريال</span></p>
                    </div>
                    <Payment totalPrices={totalPrices} className='payment_component'/>
                </section>
                <p> أسم الشجرة سيكون ظاهر لجميع مستخدمي خريطة الأشجار، الرجاء التأكد من عدم إفشاء معلومات خاصة، أو إستخدام الاسم لتسبب ضرر بكلمات أو عبارات عنصرية أو مؤذية </p>
                <p> ستتم زراعة الأشجار فور تحقيق الهدف الخاص بموقع الزراعة أو بعد مرور فترة من الزمن. سيتم إشعاركم فور زراعة الشجرة وسيتم إرسال شهادة خاصة ورابط لموقع الشجرة. إضافة إلى ذلك، لن تتم الزراعة في فصل الصيف (مارس - أغسطس) وذلك لضمان نجاح عملية الزراعة </p>
             </div>
            ): <span className={error? 'show':'error'} > لابد من ادخال عدد الاشجار واسم الشجرة</span>
            
            } 
            
        </div>
    );
};
export default LocationDetails;