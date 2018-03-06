
const { decode } = require('../auth/token')
const express = require('express')
const router = express.Router()

const db = require('../db/dice')

// get all the dice details from the dice_name table and send back to client
router.get('/', decode, (req, res) => {
  db.getDiceNames()
    .then(dice => {
      res.json(dice)
    })
    .catch(err => {
      res.status(500).send('DATABASE_ERROR: ' + err.message)
    })
})

router.put('/', decode, (req, res) => {
  db.inactiveDice(req.body)
    .then(result => {
      res.json({result})
    })
    .catch(err => {
      res.status(500).send('DATABASE_ERROR: ' + err.message)
    })
  })


module.exports = router
