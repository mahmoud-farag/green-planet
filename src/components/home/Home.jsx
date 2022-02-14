import React ,{useEffect, useState}from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import axios from 'axios';
import {Buffer} from 'buffer';


export default function Home() {
  const [locations, setLocations] = useState([]);
   const [error, setError] =useState('')
   const  getLocations = async()=>{
      try {
        const {data}= await axios.get('http://localhost:4000/api/v1/location');
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


  return <div className='home--container'>
      {/* <svg   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
       <path fill="#00cba9" fill-opacity="1" d="M0,256L60,218.7C120,181,240,107,360,85.3C480,64,600,96,720,101.3C840,107,960,85,1080,90.7C1200,96,1320,128,1380,144L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
     </svg> */}

         {/*  start top--section */}
     <section className="top--section">
         <img  className='trees'src={process.env.PUBLIC_URL + '/imgs/trees.png'} ></img>
         <div className="title">
            <h1> كيف تزرع شجرة من خلال منصة نباتك</h1>
            <p>ترك تأثير بيئي إيجابي أصبح أسهل من أي وقت مضى</p>
         </div>
         <div className='top--section__items'>
           <ul>
              <li>
                <img src={process.env.PUBLIC_URL + '/imgs/svg4.svg'}></img>
                <h4>رابط موقع الشجرة</h4>
                <p>بعد زراعة الشجرة ستتمكن من الحصول على شهادة زراعة ورابط لموقع الشجرة</p>
              </li>

              <li>
               <img src={process.env.PUBLIC_URL + '/imgs/svg3.svg'}></img>
               <h2>ادفع أونلاين</h2>
               <p>توجد لدينا جميع حلول الدفع الإلكتروني لتتمكن الزراعة بضغطة زر</p>
             </li>

             <li>
               <img src={process.env.PUBLIC_URL + '/imgs/svg2.svg'}></img>
               <h2>اختر شجرتك</h2>
               <p>قمنا بتحديد الأنواع المناسبة لكل موقع وحرصنا على اختيار اشجار محلية</p>
             </li>

             <li>
               <img src={process.env.PUBLIC_URL + '/imgs/svg1.svg'}></img>
               <h2>اختر موقع</h2>
               <p>المواقع المحددة من قبلنا توجد بها شبكة ري وتربة صالحة للزراعة</p>
             </li>            
           </ul>
         </div>
         <div className='btn'>
          <button >ازرع شجرة</button>
         </div>
         
     </section>
    {/*  end top--section */}
    {/*  start meddile--section */}
    <section className="meddille--section">
            <div className='title'>
              <h1>أين تريد زراعة الأشجار؟</h1>
              <p>جميع المواقع تم اختيارها لجاهزيتها للزراعة ووجود شبكة ري وتربة صالحة</p>
            </div>
            {/* start  cards--container */}
            <div className="cards--container">
               {/* start  card*/}
               {
                error? <h1>netwrok error ...try again</h1>
                :
                locations.length>0 ? locations.map(location=>(
                  <div  key={location._id}className="card">
                    <figure>
                      <Link to={location._id}>
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
                  <button className='anchor'><Link  style={{ textDecoration: 'none', color:'#fff'}} to={location._id}>ازرع شجرة</Link></button>
                </div> 
                // end card
               ))
               :
                 <h1>Loading...</h1>}
              
             
      
            </div>
          {/* start  cards--container */}

    </section>
    {/*  end meddile--section */}
  </div>;
}
