import React from 'react'

const Home = () => {
  return (
    <div className='container-fluid p-0' style={{position: 'relative'}}>
      <h1 style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1}}>WELCOME</h1>
      <img style={{height: '100vh', width: '100vw', objectFit: 'cover', zIndex: -1}} src='../../images/homy.jpg' alt=''/>
    </div>
  )
}
export default Home
