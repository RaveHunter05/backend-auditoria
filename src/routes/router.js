const express = require('express')

const router = express.Router()

const risk = require('./risk.js')
const user = require('./user.js')
const cause = require('./cause.js')
const control = require('./control.js')


router.get('/', (req, res) => res.send('bonjour'))

router.use('/risk', risk)

router.use('/user', user)

router.use('/cause', cause)

router.use('/control', control)



module.exports = router