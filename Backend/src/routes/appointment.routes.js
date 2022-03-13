const express = require('express');
const router = express.Router();
// const fs = require('fs');
// const morgan = require('morgan')
const {
    store,
    show,
    destroy,
    updateStatus,
    index
} = require('../controllers/appointment.controller')

router.get('/:region',show)
router.get('/',index)
router.post('/store', store)
router.delete('/:id', destroy)
router.put('/status/:id', updateStatus)

module.exports = router;