const express = require('express');
const router = express.Router();
// const fs = require('fs');
// const morgan = require('morgan')
const {
    store,
    index,
} = require('../controllers/sideEffect.controller')
router.get('/', index)
router.post('/store', store)

module.exports = router;