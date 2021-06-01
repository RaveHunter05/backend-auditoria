const express = require('express')

const router = express.Router()

const riskController = require('../controllers/riskController.js')


router.post('', riskController.create)

router.get('/all', riskController.getAll)

module.exports = router