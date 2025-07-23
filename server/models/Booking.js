const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  roomType: String,
  checkIn: Date,
  checkOut: Date,
  message: String
});

module.exports = mongoose.model('Booking', bookingSchema);