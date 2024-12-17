// backend/models/bookingModel.js
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user: { type: String, required: true },
  room: { type: String, required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  recurring: { type: Boolean, required: false }
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
