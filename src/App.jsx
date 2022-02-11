import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home.jsx';
import Login from './components/login/Login';
import Map from './components/map/Map';
import Payment from './components/payment/Payment';
import Questions from './components/qusetions/Questions';
import Register from './components/register/Register';



// import "../node_modules/bootstrap/dist/css/bootstrap.css";





function App() {
  return (
    <div className="App">
      <Header/> 
        <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/faq' element={<Questions/>}/>
         <Route path='/map' element={<Map/>}/>
         <Route path='/payment' element={<Payment/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/register' element={<Register/>}/>

       </Routes>
   
          
      <Footer/>
    </div>
  );
}

export default App;
