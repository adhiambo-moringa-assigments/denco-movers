import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home';


function App() {
  return (
    <div>
    <BrowserRouter>
      {/* your app code */}
      <Navbar/>
      <Home/>
    </BrowserRouter>
    </div>
  );
}

export default App

