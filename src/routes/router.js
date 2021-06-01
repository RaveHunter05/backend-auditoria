const express = require('express')

const router = express.Router()

const risk = require('./risk.js')


router.get('/', (req, res) => res.send('bonjour'))

router.use('/risk', risk)



module.exports = router