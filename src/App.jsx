import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './components/header.components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header.components/header/Header';
import Home from './components/home/Home.jsx';
import Login from './components/header.components/login/Login';
import MapContainer from './components/header.components/map/MapContainer';
import Payment from './components/payment/Payment';
import Questions from './components/header.components/qusetions/Questions';
import Register from './components/header.components/register/Register';
import Location from './components/card/Location/Location';
import LocationDetails from './components/card/locationDetails/LocationDetails';
import About from './components/header.components/about/About';

function App() {
  return (
    <div className="App">
      <Header/> 
        <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/faq' element={<Questions/>}/>
         <Route path='/map' element={<MapContainer/>}/>
         <Route path='/payment' element={<Payment/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/register' element={<Register/>}/>
         <Route path='/location' element={<Location/>}/>
         <Route path='/location/:id' element={<LocationDetails/>}/>
       </Routes>
   
          
      <Footer/>
    </div>
  );
}

export default App;
