import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    roomType: '',
    checkIn: '',
    checkOut: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!res.ok) throw new Error('Failed to submit booking');

      const data = await res.json();
      console.log(' Booking submitted:', data);

      setFormData({
        name: '',
        email: '',
        roomType: '',
        checkIn: '',
        checkOut: '',
        message: ''
      });

      alert('Booking submitted successfully!');
    } catch (err) {
      console.error(' Error submitting booking:', err);
      alert('Failed to submit booking. Please try again.');
    }
  };

  return (<>
    <div className="theme">
      <div className="booking-hero">
    <form className="booking-form" onSubmit={handleSubmit}>
      <h2>Book Your Stay</h2>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <select
        name="roomType"
        value={formData.roomType}
        onChange={handleChange}
        required
      >
        <option value="">Select Room</option>
        <option value="Deluxe">Deluxe</option>
        <option value="Suite">Suite</option>
      </select>
      <input
        name="checkIn"
        type="date"
        value={formData.checkIn}
        onChange={handleChange}
        required
      />
      <input
        name="checkOut"
        type="date"
        value={formData.checkOut}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Special requests"
      />
      <button type="submit">Book Now</button>
    </form>
    </div>
    </div>
    </>
  );
};

export default BookingForm;