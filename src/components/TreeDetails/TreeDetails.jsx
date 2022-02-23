import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Tree from './tree/Tree';
import './TreeDetails.css';
import '../home/Home.css'

import {Buffer} from 'buffer'

function TreeDetails(){
    const params= useParams();
    const treeId =+params.id;
    const [locations, setLocations] = useState([]);
   const [error, setError] =useState('')
   const  getLocations = async()=>{
      try {
       const {data} = await axios.get(`https://green-planet12.herokuapp.com/api/v1/location`);
        // const {data}= await axios.get('http://localhost:4000/api/v1/location');
        if(data){
          console.log(data.locations)
         setLocations(data.locations)
          //  console.log(Buffer.from(data.locations[0].img.binaryImg.data, 'binary').toString('base64'))
        }
      } catch (error) {
         setError(error.message)
        console.log(error.message)
      }
    }
    
  useEffect(()=>{
    getLocations();
  },[])

    return(

        <div className='custom__container'>
            
            <div className="section ">
                 
                   {(treeId===1)&&<Tree treeName='شجرة البونسيانا' treePrice='55' treeImage='/imgs/bonsiana.jpeg'/>} 
                   {(treeId===2)&&<Tree treeName='شجرة النيم' treePrice='55' treeImage='/imgs/Neem.jpeg'/>} 
                   {(treeId===3)&&<Tree treeName='فيكس لسان العصفور' treePrice='80' treeImage='/imgs/fekass.jpeg'/>} 
                   {(treeId===4)&&<Tree treeName='شجرة اللبخ' treePrice='55' treeImage='/imgs/elab5.jpg'/>} 
                   {(treeId===5)&&<Tree treeName='أكاسيا جلوكا' treePrice='40' treeImage='/imgs/akasia.jpeg'/>} 

            </div>

            <div className=" section loc_title  mt-3 ">
                <div>
                    <h3 className='  text-end'> : المواقع المناسبة لتلك الشجرة</h3>
                </div>
            </div>
        <section className="meddille--section">
            <div className="cards--container">
               {/* start  card*/}
               {
                error? <h1>netwrok error ...try again</h1>
                :
                locations.length>0 ? locations.map(location=>(
                  <div  key={location._id}className="card">
                    <figure>
                      <Link to={`/location/${location._id}`}>
                        <img 
                          src={`data:image/jpeg;base64,
                          ${Buffer.from(location.img.binaryImg.data,'binary').toString('base64')}`}>
                          
                          </img>
                      </Link>
                    </figure>
                  <div className="card--body">
                    <h5>الأشجار التي زُرعت{location.maxTrees} / {location.totalPlantedTrees}</h5>
                    <p>{location.title}</p>
                    <p><span>{location.treePrice} ريال</span> / شجرة</p>
                  </div>
                  <Link className='btn' to={`/location/${location._id}`}>ازرع شجرة</Link>          
                 </div> 
                // end card
               ))
               :
                 <h1>Loading...</h1>}
                           
            </div>
         </section>     

            {/* <div className=' d-flex justify-content-center mt-3 m-auto w-25'>
                <button className=' location-btn text-info p-3 btn btn-outline-info rounded-pill'>More Locations</button>
            </div> */}

            <section className='  questions-form mt-5'>

                <div className=" section mb-4 ">

                    <div className="row">

                        <div className='col-md-12 col-sm-12 col-lg-12 col-xl-12'>

                            <div className='bg-light p-4 form-group'>
                                <h6 className='text-center'>لديك سؤال؟</h6>
                                <p className='text-center mt-4'>سنقوم بالإجابة على اسئلتكم في أسرع وقت ممكن</p>

                                <input placeholder='الاسم ' className='m-auto  text-end mt-3  form-control' type="text" />

                                <input placeholder='البريد الالكتروني' className='m-auto  text-end mt-3  form-control' type="email" name="" id="" />

                                <textarea placeholder='محتوى الرسالة' className='m-auto text-end mt-3 form-control'></textarea>

                                <div className='m-auto mt-3 w-25 d-flex justify-content-center'>
                                    <button className='btn btn-info text-light fw-bold px-5 rounded-pill'>ارسال </button>
                                </div>

                                
                            </div>

                        </div>

                    </div>

                </div>

            </section> 

        </div>

    );

};


export default TreeDetails;