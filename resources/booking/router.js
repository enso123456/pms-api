const express = require('express');
const router = express.Router();

const Booking = require('./controller');
const bookingCtr = Booking();
const {
  checkRoomAvailability,
  addBooking,
  getGuestBookingDetails,
  updateGuestBooking
} = bookingCtr;

router.post('/', checkRoomAvailability, addBooking);
router.get('/', getGuestBookingDetails);
router.put('/', updateGuestBooking);

module.exports = router;

