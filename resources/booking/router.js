const express = require('express');
const router = express.Router();

const Booking = require('./controller');
const bookingCtr = Booking();
const {
  checkRoomAvailability,
  addBooking
} = bookingCtr;

// router.param('id', bookingCtr.checkRoomAvailability);
router.post('/', checkRoomAvailability, addBooking);
// router.put('/:id', bookingCtr.updateGuestDetails);

module.exports = router;

