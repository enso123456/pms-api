const express = require('express');

const router = express.Router();

const controller = require('./amenities.controller');

router.get('/:id', controller.getRoomAmenities);
router.post('/', controller.addRoomAmenities);
router.put('/:id', controller.updateRoomAmenities);
router.delete('/:id', controller.deleteRoomAmenities);

module.exports = router;