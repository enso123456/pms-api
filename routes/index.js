const express = require('express');
const restRouter = express.Router();

const bedRoutes = require('../resources/bed');
const amenitiesRoutes = require('../resources/amenities');
const featureRoutes = require('../resources/features');
const roomRoutes = require('../resources/room');
const guestRoutes = require('../resources/guests');
const bookingRoutes = require('../resources/booking');

restRouter.use('/bed', bedRoutes);
restRouter.use('/amenities', amenitiesRoutes);
restRouter.use('/features', featureRoutes);
restRouter.use('/rooms', roomRoutes);
restRouter.use('/guests', guestRoutes);
restRouter.use('/booking', bookingRoutes);

module.exports = restRouter;