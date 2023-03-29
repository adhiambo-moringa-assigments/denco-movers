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


function App() {

  const [contacts,setContacts]=useState([])

  useEffect(()=>{
      fetch('/services')
      .then(res=>res.json())
      .then(data=>setContacts(data))
  }
  ,[])
  console.log(contacts)

  return (
    <div>
    <BrowserRouter>
     
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/GettingStarted' element={<GettingStarted/>}/>
        <Route path='/services' element={<Services 
        contacts={contacts}
        />}/>
        <Route path='/contact' element={<ContactForm
        contacts={contacts}
        />}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>

      </Routes>
     
    </BrowserRouter>
    </div>
  );
}

export default App

