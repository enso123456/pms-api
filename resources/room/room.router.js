const express = require('express');

const router = express.Router();

const controller = require('./room.controller');

router.get('/', controller.getRooms);
router.post('/', controller.addRoom);
router.post('/type', controller.addRoomType);
router.get('/type', controller.getRoomType);
// router.get('/:id', controller.getRoom);
// router.patch('/:id', controller.updateRoom);
// router.delete('/:id', controller.deleteRoom);

module.exports = router;