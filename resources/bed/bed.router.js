const express = require('express');
const router = express.Router();

const controller = require('./bed.controller');

router.get('/', controller.getBeds);
router.post('/', controller.addBed);
router.get('/:id', controller.getBed);
router.put('/:id', controller.updateBed);
router.delete('/:id', controller.deleteBed);

module.exports = router;
