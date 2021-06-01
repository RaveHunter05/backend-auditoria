
const path = require('path')

const dotenv = require('dotenv').config({path: path.resolve(__dirname,'../../.env')})

module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "host": process.env.HOST,
    "dialect": "postgres",
    "dialectOptions": {
      "useUTC": false, // for reading from database
    },
    "timezone": '-03:30', // for writing to database
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "host": process.env.HOST,
    "dialect": "postgres",
    "dialectOptions": {
      "useUTC": false, // for reading from database
    },
    "timezone": '-03:30', 
  }
}
