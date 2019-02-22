const express = require('express');
const router = express.Router();

const controller = require('../../resources/bed/bed.controller');

router.get('/', (req, res) => {
  res.json({ status: 200 });
});
router.post('/', controller.addBed);
router.put('/:id', controller.updateBed);
router.delete('/:id', controller.deleteBed);

module.exports = router;
