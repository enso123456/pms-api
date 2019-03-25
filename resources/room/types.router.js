const express = require('express');

const router = express.Router();

const controller = require('./types.controller');

router.get('/:id', controller.getTypes);
router.post('/', controller.addRoomTypes);
router.put('/:id', controller.updateRoomTypes);
router.delete('/:id', controller.deleteRoomTypes);

module.exports = router;