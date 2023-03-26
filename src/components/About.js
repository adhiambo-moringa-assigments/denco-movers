import React from 'react'

const About = () => {
  return (
    <div 
    style={{backgroundImage: 'url(../images/desk.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '90vh', width: '100vw', objectFit: 'cover', zIndex: -1}}
    >
      <div className=''>
    <div className='mx-5 pt-5  text-left'>
      <h1 className="text-6xl text-center font-serif text-white ">About <br/> </h1>
   <h5 className='text-white font-serif text-3xl '>At DENCO Movers we make your moving experience easy, we provide you with fast, efficient and reliable services. We are a registered and one of the leading and best moving companies in Kenya that provides you with professional services that reaches your expectations.</h5>
   <h1 className="text-6xl text-center font-serif  text-white ">Mission <br/> </h1>
    <h5 className='text-white text-3xl font-serif '>Our mission is to provide you with the best moving services in Kenya. We are committed to providing you with the best moving services that will make your moving experience easy and stress free.</h5>
    <h1 className="text-6xl text-center  text-white ">Vision <br/> </h1>
    <h5 className='text-white text-2xl '>Our vision is to be the best moving company in Kenya. We are committed to providing you with the best moving services that will make your moving experience easy and stress free.</h5>
    <h1 className="text-6xl text-center  text-white ">What We Do <br/> </h1>
    <h5 className='text-white text-2xl '>We provide you with the best moving services in Kenya. We are committed to providing you with the best moving services that will make your moving experience easy and stress free.</h5>
    </div>
    </div>
    </div>
  )
}

export default About
