const express = require('express')

const router = express.Router()

const riskController = require('../controllers/riskController.js')


router.post('', riskController.create)

module.exports = router