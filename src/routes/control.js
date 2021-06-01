const express = require('express')

const router = express.Router()

const controlController = require('../controllers/controlController.js')


router.post('', controlController.create)

router.get('/all', controlController.getAll)

module.exports = router