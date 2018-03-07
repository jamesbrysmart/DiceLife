var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var passport = require('passport')

var server = express()

server.use(cors('*'))

server.use(passport.initialize())
server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/auth', require('./routes/auth'))
server.use('/api/diceNames', require('./routes/diceNames'))
server.use('/api/diceOptions', require('./routes/diceOptions'))
server.use('/api/users', require('./routes/users'))
server.use('/api/history', require('./routes/diceHistory'))

module.exports = server
