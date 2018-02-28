const { decode } = require('../auth/token')
const express = require('express')
const router = express.Router()

var fakeOptions = [
 {id: 1, diceOptions: 'go to hell', position: 3, diceNameId:1}
]

router.get('/', decode, (req, res) => {
  res.json(fakeOptions)
})

module.exports = router
