const express = require('express');

const router = express.Router();

const amenities = require('./amenities.controller');

router.get('/', amenities.getAmenities);
router.post('/', amenities.createAmenities);
router.get('/:id', amenities.getAmenity);
router.put('/:id', amenities.updateAmenities);
router.delete('/:id', amenities.deleteAmenities);

module.exports = router;