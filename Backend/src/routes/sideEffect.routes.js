const express = require('express');
const router = express.Router();
// const fs = require('fs');
// const morgan = require('morgan')
const {
    store,
    show,
} = require('../controllers/sideEffect.controller')
router.get('/', show)
router.post('/store', store)

module.exports = router;