import React from 'react';
import Footer from './Footer';
import GettingStarted from './GettingStarted';
import About from './About';
import { Link } from 'react-router-dom';


const Home = () => {

  function scrollToServices() {
    const servicesElement = document.getElementById('services');
    if (servicesElement) {
      const servicesElementPosition = servicesElement.offsetTop;
      window.scrollTo({
        top: servicesElementPosition,
        behavior: 'smooth'
      });
    }
  }
  
  return (
    <>
      <div 
        className=" h-screen max-w-full flex items-center justify-center bg-cover bg-center"
        style={{backgroundImage: 'url(../../images/homy.jpg)'}}>
        <div className="text-center text-white">
          <h1 className="text-6xl font-serif mb-4">Welcome to</h1>
          <h1 className="text-6xl font-bold mb-4"><span className="text-yellow-400">DENCO MOVERS</span></h1>
          <h2 className="text-3xl font-serif font-medium mb-8">We pride ourselves by serving the best to our customers</h2>
          <Link to="">
          <button className="bg-yellow-400 text-white font-medium rounded-full py-3 px-8 hover:bg-gray-300 hover:text-black transition-colors duration-300" onClick={scrollToServices}>Move With Us</button>
          </Link>
        </div>
      </div>
      <GettingStarted id="services" />
      <About/>
      <Footer/>
      
    </>
  )
}

export default Home
