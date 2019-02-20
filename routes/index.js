const express = require('express');
const restRouter = express.Router();

const bedRoutes = require('../resources/bed/bed.router');

restRouter.use('/bed', bedRoutes);

module.exports = restRouter;