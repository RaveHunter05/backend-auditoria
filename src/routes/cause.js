const express = require('express')

const router = express.Router()

const causeController = require('../controllers/causeController')


router.post('', causeController.create)

router.get('/all', causeController.getAll)

module.exports = router