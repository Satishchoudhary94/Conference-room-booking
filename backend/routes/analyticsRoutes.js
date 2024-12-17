const express = require('express');
const router = express.Router();
const { getBookingAnalytics } = require('../controllers/analyticsController');

// GET: Booking analytics
router.get('/', getBookingAnalytics);

module.exports = router;

