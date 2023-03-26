import React from 'react'
import Footer from './Footer'
import GettingStarted from './GettingStarted'

const Home = () => {
  return (
    <>
    <div 
    style={{backgroundImage: 'url(../../images/homy.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '90vh', width: '100vw', objectFit: 'cover', zIndex: -1}}
    >
      <div className='pt-5'>
    <div className='mx-5 pt-20 text-left'>
      <h1 className="text-6xl font-serif  text-white ">Welcome to <br/> </h1>
      <h1 className='font-bold font-serif text-6xl'><span className='text-yellow-400'>DENCO MOVERS</span></h1>
      <h2 className="text-3xl mt-1 font-serif text-white font-semi-bold">We pride ourselves by sering the best to our customers</h2>
   
   <div className='text-left mt-5'>
   <button className="bg-yellow-400 font-serif text-white text-center font-bold rounded border-b-2 border-gray-300 hover:border-gray-400 hover:bg-gray-300 shadow-md py-2 px-6 inline-flex items-center">
      <span className="mr-2">Move With Us</span>
      <svg className="w-4 h-4" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5 12h14"></path>
        </button>
   </div>
    </div>
    </div>
    </div>
    <GettingStarted/>
    <Footer/>
    </>
  )
}
export default Home
