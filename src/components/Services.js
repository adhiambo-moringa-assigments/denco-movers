import React from 'react'


const Services = ({services}) => {
  return (
    <>
<div className="grid grid-cols-1 gap-2 px-28 py-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
    {services.map((service)=>(
        <div className='flex flex-col'>
        <div className='flex flex-col'>
        <div class="max-w-sm rounded overflow-hidden shadow-lg mt-5 mx-5">
        <img class="w-full" src={service.image} alt="Sunset in the mountains"/>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 font-serif">{service.name}</div>
          <p class="text-gray-700 text-base font-serif">
          {service.description}
          </p>
          <p>{service.price}</p>
        </div>
      </div>
      </div>
      </div>
    ))}

    {/* <div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg mt-5 mx-5">
      <img class="w-full" src="../images/move.jpg" alt="Sunset in the mountains"/>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2 font-serif">Home Moving</div>
        <p class="text-gray-700 text-base font-serif">
        Be it moving an individual or a family, the
        process of relocation is always an emotional
        event. It is difficult, time consuming and
        stressful.
        </p>
      </div>
    </div>
    </div> */}
    </div>
    <div className='text-center m-5'>
        <button className="bg-yellow-400 font-serif text-white text-center font-bold rounded-full border-b-2 border-gray-300 hover:border-gray-400 hover:bg-gray-300 shadow-md py-2 px-6 inline-flex items-center">
        <a href='/contact' className='text-white'>Get a Quote</a>
        </button>
    </div>
    </>
  )
}

export default Services
