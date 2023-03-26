import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import { Route, Routes } from 'react-router-dom';
import Services from './components/Services';

function App() {
  return (
    <div>
    <BrowserRouter>
     
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
      </Routes>
     
    </BrowserRouter>
    </div>
  );
}

export default App

