const express = require('express');

const router = express.Router();

const controller = require('./room.controller');
const roomFeatureRouter = require('./room.feature.router');

/* Room Features */
router.use('/features', roomFeatureRouter);

/* Room Route */
router.get('/', controller.getRooms);
router.post('/', controller.addRoom);
router.get('/:id', controller.getRoom);
router.patch('/:id', controller.updateRoom);
router.delete('/:id', controller.deleteRoom);

module.exports = router;