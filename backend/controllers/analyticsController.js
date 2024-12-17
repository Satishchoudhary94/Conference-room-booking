// backend/controllers/analyticsController.js
const Booking = require('../models/bookingModel');

const getRoomAnalytics = async (req, res) => {
  try {
    // Count bookings per room
    const roomStats = await Booking.aggregate([
      { $group: { _id: "$room", count: { $sum: 1 } } }
    ]);

    // Get the number of bookings per hour
    const hourlyStats = await Booking.aggregate([
      { $project: { hour: { $hour: "$startTime" } } },
      { $group: { _id: "$hour", count: { $sum: 1 } } }
    ]);

    res.status(200).json({ roomStats, hourlyStats });
  } catch (error) {
    console.error('Error fetching analytics:', error);
    res.status(500).json({ message: 'Error fetching analytics', error: error.message });
  }
};

module.exports = { getRoomAnalytics };
