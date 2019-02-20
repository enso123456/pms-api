const express = require('express');
const router = express.Router();

const controller = require('../../resources/bed/bed.controller');

router.get('/', (req, res) => {
  res.json({ status: 200 });
});

router.post('/', controller.addBed);

module.exports = router;
