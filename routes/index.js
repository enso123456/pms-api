const express = require('express');
const restRouter = express.Router();

const bedRoutes = require('../resources/bed');
const amenitiesRoutes = require('../resources/amenities');
const featureRoutes = require('../resources/features');
const roomRoutes = require('../resources/room');

restRouter.use('/bed', bedRoutes);
restRouter.use('/amenities', amenitiesRoutes);
restRouter.use('/features', featureRoutes);
restRouter.use('/rooms', roomRoutes);

module.exports = restRouter;