'use strict';
const Hotels = require('./hotels.contoller');
const { Router } = require('express');
const router = Router();

router.get('/', Hotels.all);

module.exports = router;