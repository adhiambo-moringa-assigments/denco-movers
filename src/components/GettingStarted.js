import React from 'react'

const GettingStarted = () => {
  return (
    <>
      <div className='flex flex-row text-center mx-5 px-5'>
        <div className='flex flex-col'>
          <div class="max-w-sm rounded overflow-hidden shadow-lg mt-5 mx-5">
            <img class="w-full" src="../images/commercial.jpg" alt="Commercial Moving"/>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 font-serif">Commercial Moving</div>
              <p class="text-gray-700 text-base font-serif">
                Be it moving an individual or a family, the process of relocation is always an emotional event. It is difficult, time consuming and stressful.
              </p>
            </div>
          </div>
        </div>
        
        <div className='flex flex-col'>
          <div class="max-w-sm rounded overflow-hidden shadow-lg mt-5 mx-5">
            <img class="w-full" src="../images/office.jpg" alt="Office Moving"/>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 font-serif">Office Moving</div>
              <p class="text-gray-700 text-base font-serif">
                Moving an office is far different from house moving. Whether it’s just moving floors or across the country, our movers are experienced and trained to effectively handle, and relocate all your office.
              </p>
            </div>
          </div>
        </div>

        <div className='flex flex-col'>
          <div class="max-w-sm rounded overflow-hidden shadow-lg mt-5 mx-5">
            <img class="w-full" src="../images/loading.jpg" alt="Loading/Unloading"/>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 font-serif">Loading/Unloading</div>
              <p class="text-gray-700 text-base font-serif" >
                We are a professional moving company that provides loading and unloading services for residential and commercial moves. We have the experience and equipment to make your move as smooth as possible.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='text-center m-5'>
  <button className="bg-yellow-400 text-white font-medium rounded-full py-3 px-8 hover:bg-gray-300 hover:text-black transition-colors duration-300 text-lg">
    <a href='/Services' className='text-white'>See More</a>
  </button>
</div>

    </>
  )
}

export default GettingStarted
