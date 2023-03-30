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
import GettingStarted from './components/GettingStarted';
import AuthProvider from './components/AuthContext';


function App() {

  const [contService, setContService]=useState([])

  useEffect(()=>{
      fetch('/services')
      .then(res=>res.json())
      .then (data=>{
          setContService(data)
      }
      )
  }
  ,[])
  console.log(contService)

  return (
    <div>
    <BrowserRouter>
     <AuthProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/GettingStarted' element={<GettingStarted/>}/>
        <Route path='/services' element={<Services 
        contService={contService}
        />}/>
        <Route path='/contact' element={<ContactForm
        contService={contService}
        />}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>

      </Routes>
     </AuthProvider>
    </BrowserRouter>
    
    </div>
  );
}

export default App

