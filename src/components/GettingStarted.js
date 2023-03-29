import React from 'react'

const GettingStarted = () => {
  return (
    <>
    <div className='flex flex-row text-center mx-5 px-5'>

    <div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg mt-5 mx-5">
     <img class="w-full" src="../images/commercial.jpg" alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 font-serif">Commercial Moving</div>
    <p class="text-gray-700 text-base font-serif">
    Be it moving an individual or a family, the
 process of relocation is always an emotional 
event. It is difficult, time consuming and 
stressful.
    </p>
  </div>
  
</div>
    </div>
    
    <div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg mt-5 mx-5">
     <img class="w-full" src="../images/office.jpg" alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 font font-serif">Office Moving</div>
    <p class="text-gray-700 text- font-serif">
    Moving an office is far different from house
moving. Whether it’s just moving floors or across the country,
 our movers are experienced and trained to effectively handle,
  and relocate all your office .
    </p>
  </div>
  
</div>
    </div>

    <div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg mt-5 mx-5">
      <img class="w-full" src="../images/loading.jpg" alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 font font-serif">Loading/Unloading</div>
    <p class="text-gray-700 text-base font-serif" >
    We are a professional moving company that
provides loading and unloading services for
residential and commercial moves. We have
the experience and equipment to make your
move as smooth as possible.
    </p>
    </div>

  
</div>
    </div>
    </div>
    <div className='text-center m-5'>
        <button className="bg-yellow-400 font-serif text-white text-center font-bold rounded-full border-b-2 border-gray-300 hover:border-gray-400 hover:bg-gray-300 shadow-md py-2 px-6 inline-flex items-center">
        <a href='/Services' className='text-white'>See More</a>
        </button>
    </div>
    </>
  
  )
}

export default GettingStarted
