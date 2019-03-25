const express = require('express');

const router = express.Router();

const controller = require('./room.controller');
const featureRouter = require('./feature.router');
const amenitiesRouter = require('./amenities.router');
const typesRouter = require('./types.router');

/* Room Features/Amenities */
router.use('/features', featureRouter);
router.use('/amenities', amenitiesRouter);
router.use('/types', typesRouter);

/* Room Route */
router.get('/', controller.getRooms);
router.post('/', controller.addRoom);
router.get('/:id', controller.getRoom);
router.patch('/:id', controller.updateRoom);
router.delete('/:id', controller.deleteRoom);

module.exports = router;