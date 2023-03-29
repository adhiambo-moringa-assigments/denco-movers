import React,{useState,useEffect} from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import { Route, Routes } from 'react-router-dom';
import Services from './components/Services';
import ContactForm from './components/ContactForm';
import SignUp from './components/SignUp';
import Login from './components/Login';

function App() {

  const [services,setServices]=useState([])

  useEffect(()=>{
      fetch('/services')
      .then(res=>res.json())
      .then(data=>setServices(data))
  }
  ,[])
  console.log(services)

  return (
    <div>
    <BrowserRouter>
     
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services 
        services={services}
        />}/>
        <Route path='/contact' element={<ContactForm
        services={services}
        />}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>

      </Routes>
     
    </BrowserRouter>
    </div>
  );
}

export default App

