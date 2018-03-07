const { decode } = require('../auth/token')
const express = require('express')
const router = express.Router()

const db = require('../db/dice')

router.get('/', decode, (req, res) => {
  db.getDiceHistory()
    .then(dice => {
      res.json({dice})
    })
    .catch(err => {
      res.status(500).send('DATABASE_ERROR: ' + err.message)
    })
})

router.post('/', decode, (req, res) => {
  db.addNewRoll(req)
  .then(diceId => {
    res.json({diceId})
    })
  .catch(err => {
    res.status(500).send('DATABASE_ERROR: ' + err.message)
  })
})

module.exports = router