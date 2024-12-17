// backend/routes/bookingRoutes.js
const express = require('express');
const router = express.Router();
const { createBooking } = require('../controllers/bookingController');
// backend/routes/bookingRoutes.js
const { getRoomAnalytics } = require('../controllers/analyticsController');
router.get('/analytics', getRoomAnalytics); // Route for analytics


router.post('/', createBooking);

module.exports = router;
