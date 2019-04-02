const express = require('express');
const router = express.Router();

const controller = require('./controller');

router.param('id', controller.findGuest);

router.get('/:id', controller.getGuestDetails);
router.post('/', controller.addGuest);
router.put('/:id', controller.updateGuestDetails);

module.exports = router;
