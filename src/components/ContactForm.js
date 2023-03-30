import React, { useState } from 'react';
import Footer from './Footer';




const ContactForm = ({contService,setQuote}) => {
  const isLoggedIn = sessionStorage.getItem("jwtToken") ? true : false;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  // const [service, setService] = useState('');
  const [movingFrom, setMovingFrom] = useState('');
  const [movingTo, setMovingTo] = useState('');
  const [houseSize, setHouseSize] = useState('');
  const [movingDate, setMovingDate] = useState('');
  const [additionalServices, setAdditionalServices] = useState('');
 
  
  const [selectedServiceId, setSelectedServiceId] = React.useState(contService.service_id);
    

  function handleSelectChange(event) {
    setSelectedServiceId(event.target.value);
  }


  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePhoneChange(event) {
    setPhone(event.target.value);
  }


  function handleMovingFromChange(event) {
    setMovingFrom(event.target.value);
  }

  function handleMovingToChange(event) {
    setMovingTo(event.target.value);
  }

  function handleHouseSizeChange(event) {
    setHouseSize(event.target.value);
  }

  function handleMovingDateChange(event) {
    setMovingDate(event.target.value);
  }

  function handleAdditionalServicesChange(event) {
    setAdditionalServices(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const datat = {
      name: name,
      email: email,
      phone: phone,
      service_id: selectedServiceId,
      moving_from: movingFrom,
      moving_to: movingTo,
      house_size: houseSize,
      moving_date: movingDate,
      additionalServices: additionalServices,
    };
    console.log(datat);
    fetch('/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(datat),
    })
      .then((response) => response.json())
      .then((data) => {
        setQuote(data);

      })
      .catch((error) => {
        console.error('Error:', error);
  });
  }
  
  return (
    <>
<div  className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
  <div>
    <h3 className='text-center text-4xl text-yellow-400'>Get A Quote</h3>
  {isLoggedIn ? (
    <>
   
  <div className="text-center ml-12">
    
  <form onSubmit={handleSubmit} className="container grid grid-rows-4 grid-flow-col gap-4 ml-12">
  <label className="flex flex-col">
    <span className="text-lg font-semibold mb-1">Name *</span>
    <input type="text" className="py-2 px-3 border rounded-lg" value={name} onChange={(event) => setName(event.target.value)} />
  </label>
  <label className="flex flex-col">
    <span className="text-lg font-semibold mb-1">Email *</span>
    <input type="email" className="py-2 px-3 border rounded-lg" value={email} onChange={(event) => setEmail(event.target.value)} />
  </label>
  <label className="flex flex-col">
    <span className="text-lg font-semibold mb-1">Phone Number *</span>
    <input type="tel" className="py-2 px-3 border rounded-lg" value={phone} onChange={(event) => setPhone(event.target.value)} />
  </label>
  <label className="flex flex-col">
    <span className="text-lg font-semibold mb-1">Select Service *</span>
    <select className="py-2 px-3 border rounded-lg" value={selectedServiceId} onChange={handleSelectChange}>
      <option value="">-- Select a service --</option>
      {contService.map((contact) => (
        <option key={contact.service_id} value={contact.id}>
          {contact.name}
        </option>
      ))}
    </select>
  </label>
  <label className="flex flex-col">
    <span className="text-lg font-semibold mb-1">Moving From *</span>
    <input type="text" className="py-2 px-3 border rounded-lg" value={movingFrom} onChange={(event) => setMovingFrom(event.target.value)} />
  </label>
  <label className="flex flex-col">
    <span className="text-lg font-semibold mb-1">Moving To *</span>
    <input type="text" className="py-2 px-3 border rounded-lg" value={movingTo} onChange={(event) => setMovingTo(event.target.value)} />
  </label>
  <label className="flex flex-col">
    <span className="text-lg font-semibold mb-1">House Size *</span>
    <input type="text" className="py-2 px-3 border rounded-lg" value={houseSize} onChange={(event) => setHouseSize(event.target.value)} />
  </label>
  <label className="flex flex-col">
    <span className="text-lg font-semibold mb-1">Moving Date *</span>
    <input type="date" className="py-2 px-3 border rounded-lg" value={movingDate} onChange={(event) => setMovingDate(event.target.value)} />
  </label>
</form>
<button className="bg-yellow-400 font-serif mt-5 text-white text-center font-bold rounded-full border-b-2 border-gray-300 hover:border-gray-400 hover:bg-gray-300 shadow-md py-2 px-6 inline-flex items-center">
          <a href='/Services' className='text-white'>Submit</a>
        </button>
    <div
  class="mb-4 rounded-lg text-center bg-primary-100 py-5 px-6 text-2xl text-black"
  role="alert">
  Thank You For Choosing Us. We Are Happy To Serve You.
</div>
  </div>
  </>
  ) : (
    <div className="text-center ml-12">
    <h3 className='text-center text-4xl text-yellow-400'>Please Login To Book A Service</h3>
    </div>
  )}
</div>

</div>
<Footer/>
</>
  );
};

export default ContactForm;