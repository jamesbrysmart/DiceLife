
const { decode } = require('../auth/token')
const express = require('express')
const router = express.Router()

function getFakeDice(){
  return fakeDice
}

var fakeDice = [
  {id: 1, name: 'Friday Afternoon', user_id: 1},
  {id: 2, name: 'Dinner Plans', user_id: 1},
  {id: 3, name: 'Outdoor activity', user_id: 1},
  {id: 4, name: 'Weekend Plans', user_id: 1},
  {id: 5, name: 'Where do I sleep tonight?', user_id: 1}
]

function getFakeDice(){
  return fakeDice
}

router.get('/', decode, (req, res) => {
  res.json(fakeDice)
})

module.exports = router
