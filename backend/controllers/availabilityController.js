const Booking = require('../models/bookingModel');

const checkAvailability = async (req, res) => {
  try {
    const { room, startTime, endTime } = req.body;

    // Query to check for any overlapping bookings
    const conflicts = await Booking.find({
      room,
      $or: [
        { startTime: { $lt: endTime, $gte: startTime } }, // Conflicts if an existing booking overlaps start
        { endTime: { $gt: startTime, $lte: endTime } },   // Conflicts if an existing booking overlaps end
        { startTime: { $lte: startTime }, endTime: { $gte: endTime } } // Conflicts if an existing booking spans over the requested period
      ],
    });

    if (conflicts.length > 0) {
      return res.status(200).json({ available: false });
    } else {
      return res.status(200).json({ available: true });
    }
  } catch (error) {
    console.error('Error checking room availability:', error);
    res.status(500).json({ message: 'Error checking availability' });
  }
};

module.exports = { checkAvailability };
