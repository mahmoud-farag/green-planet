import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Location.css';
export default function Location() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [maxTrees, setMaxTrees] = useState(0);
  const [totalPlantedTrees, setTotalPlantedTrees] = useState(0); 
  const [treePrice, setTreePrice] = useState(0);
  const [img, setImg] = useState('');

  const handleSubmitting= async (event)=>{
      event.preventDefault()
    try {
      let location = new FormData();
          location.append('title',title);
          location.append('maxTrees',maxTrees);
          location.append('totalPlantedTrees',totalPlantedTrees);
          location.append('treePrice',treePrice);
          location.append('img',img);
     
      // const {data} = await axios.post('https://green-planet12.herokuapp.com/api/v1/location',location)
      const {data} = await axios.post('http://localhost:4000/api/v1/location',location)
      
         if (data) navigate('/')
    } catch (error) {
       console.log('error')
       console.log(error)
    } 
  }
  return (
    <div className='uploadCard__container'>
      <div className="form__container">
        <h2 className='title'>من فضلك ادخل هنا بيانات الموقع الجديد</h2>
        <form>
          <div>
            {/* <label> العنوان</label> */}
            <input 
              type='text' 
              name='title' 
              placeholder='من فضلك ادخل عنوان مقتضب'
              onChange={e=>setTitle(e.target.value)}
            />
          </div>
          <div>
            {/* <label> عدد الاشجار الكلي</label> */}
            <input 
              type='number' 
              name='maxTrees ' 
              placeholder='ايضا ادخل اقصى عدد اشجار متوقع زراعتها'
              onChange={e=>setMaxTrees(e.target.value)}
            />
          </div>
          <div>
            {/* <label>الاشجار المزروعة حاليا</label> */}
            <input
              type='number'
              name='totalPlantedTrees'
              placeholder='ما هو عدد الاشجار التى تم زراعتها؟'
              onChange={e=>setTotalPlantedTrees(e.target.value)}
            />
          </div>
          <div>
            {/* <label> سعر الشجرة المتوقع</label> */}
            <input 
              type='number'
              name='treePrice'
              placeholder='سعر الشجرة'
              onChange={e=>setTreePrice(e.target.value)}
            />
          </div>
          <div>
            <label>ادخل صورة للمكان</label>
            <input 
              type='file'
              name='img'
              placeholder='ادخل صورة للموقع الجديد'
              onChange={e=>setImg(e.target.files[0])}
            />
          </div>
          <button onClick={handleSubmitting} type='submit'>create new location</button>
        </form>
      </div>
    </div>
  )
}
















