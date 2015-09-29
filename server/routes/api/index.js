'use strict';
var router = require('express').Router();
module.exports = router;

router.use('/users', require('./user'));
router.use('/queries', require('./query'));
router.use('/locations', require('./location'));