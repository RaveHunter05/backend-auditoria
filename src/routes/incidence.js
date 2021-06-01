const express = require('express')

const router = express.Router()

const incidenceController = require('../controllers/incidenceController.js')


router.post('', incidenceController.create)

router.get('/all', incidenceController.getAll)

router.patch('/price', incidenceController.givePrice)

module.exports = router