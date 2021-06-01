const express = require('express')

const app = express()

const cors = require('cors')
const helmet = require('helmet')

// deprecated
const bodyParser = require('body-parser')

const compression = require('compression')
const dotenv = require('dotenv').config()

const expressIp = require('express-ip')

// necessary middlewares in the beginning
app.use(cors())
app.use(helmet())
app.use(compression())
app.use(expressIp().getIpInfoMiddleware);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const port = process.env.PORT || 8000

const router = require('./routes/router.js')

app.use('/', router)

app.listen(port, err =>{
    if(err) return console.error(err)
    return console.log(`Server is listening in port ${port}`)
})