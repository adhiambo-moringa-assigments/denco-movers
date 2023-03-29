import React, { useState } from 'react';

const ContactForm = ({services}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [movingFrom, setMovingFrom] = useState('');
  const [movingTo, setMovingTo] = useState('');
  const [houseSize, setHouseSize] = useState('');
  const [movingDate, setMovingDate] = useState('');
  const [additionalServices, setAdditionalServices] = useState('');
  
  const [serviceId, setServiceId] = React.useState(services.service_id);
    

  function handleSelectChange(event) {
    setServiceId(event.target.value);
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

  function handleServiceChange(event) {
    setService(event.target.value);
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
      service_id: serviceId,
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
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
  });
  }
  
  return (
<div  className="flex ml-12">
  <div>
    <h3>SEND US MESSAGE</h3>
  
  <div className="text-center ml-12">
    
    <form onSubmit={handleSubmit} className="container grid grid-rows-4 grid-flow-col gap-4 ml-12"  >
      <label>
        Name *
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <label>
        Email *
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <label>
        Phone Number *
        <input type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} />
      </label>
      <label>
        Select Service *
        <select value={serviceId} 
        onChange={handleSelectChange}>
          <option value="">-- Select a service --</option>
          {services.map((service) => (
            <option key={service.id} value={service.name}>
              {service.name}
            </option>
          ))}
         
        </select>
      </label>
      <label>
        Moving From *
        <input type="text" value={movingFrom} onChange={(event) => setMovingFrom(event.target.value)} />
      </label>
      <label>
        Moving To *
        <input type="text" value={movingTo} onChange={(event) => setMovingTo(event.target.value)} />
      </label>
      <label>
        House Size *
        <input type="text" value={houseSize} onChange={(event) => setHouseSize(event.target.value)} />
      </label>
      <label>
        Moving Date *
        <input type="date" value={movingDate} onChange={(event) => setMovingDate(event.target.value)} />
      </label>
      <label>
        Additional Services
        <textarea value={additionalServices} onChange={(event) => setAdditionalServices(event.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  </div>
</div>


  <div className='ml-20 mt-10'>
    <h3>CONTACT INFO</h3>
    <p>Ngong Road Nairobi Kenya</p>
    <p>Phone: 0705898902</p>
    <p>Email: info@DencoMovers.co.ke</p>
    <p>Open Sunday – Friday 08:00 – 18:00</p>
  </div>
</div>

  );
};

export default ContactForm;
