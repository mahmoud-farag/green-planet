import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home.jsx';
import Map from './components/map/Map';
import Questions from './components/qusetions/Questions';

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/faq' element={<Questions/>}/>
         <Route path='/map' element={<Map/>}/>
         {/* <Route path='/about' element={<About/>}/> */}

       </Routes>
      <h1>dcjdcj</h1>
       <Footer/>
    </div>
  );
}

export default App;
