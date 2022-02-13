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
    try {
      const location= {title, maxTrees, totalPlantedTrees, treePrice, img};
      console.log('before sending')
      const {data} = await axios.post('https://green-planet12.herokuapp.com/api/v1/location',location)

      console.log('after sending')
         if (data) navigate('/')
    } catch (error) {
       console.log('error')
       console.log(error)
    } 
    setTitle('')
    setMaxTrees(0); setTotalPlantedTrees(0);setTreePrice(0); setImg(null);
  }
  return (
    <div className='uploadCard__container'>
      <div className="form__container">
        <form>
          <input 
            type='text' 
            name='title' 
            placeholder='من فضلك ادخل عنوان مقتضب'
            onChange={e=>setTitle(e.target.value)}
          />
          <input 
            type='number' 
            name='maxTrees ' 
            placeholder='ايضا ادخل اقصى عدد اشجار متوقع زراعتها'
            onChange={e=>setMaxTrees(e.target.value)}
          />
          <input
            type='number'
            // name='totalPlantedTrees'
            placeholder='ما هو عدد الاشجار التى تم زراعتها؟'
            onChange={e=>setTotalPlantedTrees(e.target.value)}
          />
           <input 
            type='number'
            name='treePrice'
            placeholder='سعر الشجرة'
            onChange={e=>setTreePrice(e.target.value)}
          />
          <label>Image</label>
          <input 
            type='file'
            name='img'
            placeholder='ادخل صورة للموقع الجديد'
            onChange={e=>{setImg(e.target.files[0])}}
          />
          <button onClick={handleSubmitting} type='submit'>create new location</button>
        </form>
      </div>
    </div>
  )
}
















