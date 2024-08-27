const express = require('express');

const model = require('../models');

const router = express.Router();

router.get('/', controllers.get);

module.exports = router;