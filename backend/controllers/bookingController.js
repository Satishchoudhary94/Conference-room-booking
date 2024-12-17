// backend/controllers/bookingController.js
const Booking = require('../models/bookingModel');

// Create a new booking
const createBooking = async (req, res) => {
  try {
    console.log('Request to create booking received:', req.body);

    const { user, room, startTime, endTime, recurring } = req.body;
    if (!user || !room || !startTime || !endTime) {
      console.log('Validation error: Missing required fields');
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const newBooking = new Booking({
      user,
      room,
      startTime,
      endTime,
      recurring
    });

    await newBooking.save();
    console.log('Booking created successfully:', newBooking);
    res.status(201).json(newBooking);
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ message: 'Error creating booking', error: error.message });
  }
};

module.exports = { createBooking };
