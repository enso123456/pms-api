const express = require('express');

const router = express.Router();

const controller = require('./feature.controller');

router.get('/:id', controller.getRoomFeatures);
router.post('/', controller.addRoomFeature);
router.put('/:id', controller.updateRoomFeature);
router.delete('/:id', controller.deleteRoomFeature);

module.exports = router;