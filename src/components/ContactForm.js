import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [movingFrom, setMovingFrom] = useState('');
  const [movingTo, setMovingTo] = useState('');
  const [houseSize, setHouseSize] = useState('');
  const [movingDate, setMovingDate] = useState('');
  const [additionalServices, setAdditionalServices] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const message = `Name: ${name}
    Email: ${email}
    Phone Number: ${phone}
    Select Service: ${service}
    Moving From: ${movingFrom}
    Moving To: ${movingTo}
    House Size: ${houseSize}
    Moving Date: ${movingDate}
    Additional Services: ${additionalServices}`;
    alert(message);
  };
  
  return (
<div  className="flex justify-items-center">
  <div>
    <h3>SEND US MESSAGE</h3>
    <form onSubmit={handleSubmit} className="container grid grid-rows-4 grid-flow-col gap-4"  >
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
        <select value={service} onChange={(event) => setService(event.target.value)}>
          <option value="">-- Select a service --</option>
          <option value="Domestic Home Moving">Domestic Home Moving</option>
          <option value="Office Moving">Office Moving</option>
          <option value="Commercial Moving">Commercial Moving</option>
          <option value="Local Moving">Local Moving</option>
          <option value="Packing/unpacking">Packing/unpacking</option>
          <option value="Load/unloading">Load/unloading</option>
          <option value="Moving in and after Moving out Cleaning">Moving in and after Moving out Cleaning</option>
          <option value="T.V Mounting/Dstv Installation">T.V Mounting/Dstv Installation</option>
          <option value="CCTV Installation">CCTV Installation</option>
          <option value="Fumigation/pest control">Fumigation/pest control</option>
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
  <div style={{ width: '50%' }}>
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
