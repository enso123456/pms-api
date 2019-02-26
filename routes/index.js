const express = require('express');
const restRouter = express.Router();

const bedRoutes = require('../resources/bed');
const amenitiesRoutes = require('../resources/amenities');

restRouter.use('/bed', bedRoutes);
restRouter.use('/amenities', amenitiesRoutes);

module.exports = restRouter;