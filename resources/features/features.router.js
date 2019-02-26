const express = require('express');
const router = express.Router();

const controller = require('./features.controller');

router.get('/', controller.getFeatures);
router.post('/', controller.addFeatures);
router.get('/:id', controller.getFeature);
router.put('/:id', controller.updateFeatures);
router.delete('/:id', controller.deleteFeatures);

module.exports = router;
