const { decode } = require('../auth/token')
const express = require('express')
const router = express.Router()

const db = require('../db/dice')

router.get('/', decode, (req, res) => {
  db.getDiceOptions()
    .then(dice => {
      res.json({dice})
    })
    .catch(err => {
      res.status(500).send('DATABASE_ERROR: ' + err.message)
    })
})

router.post('/', decode, (req, res) => {
  db.addNewDice(req)
  .then(diceId => {
    db.addNewDiceOptions(diceId, req)
    .then(optionId => {
      res.json({optionId})
    })
  })
  .catch(err => {
    res.status(500).send('DATABASE_ERROR: ' + err.message)
  })
})

module.exports = router
