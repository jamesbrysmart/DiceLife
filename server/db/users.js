var hash = require('../auth/hash')

function createUser (user_name, first_name, last_name, password, db) {
  return new Promise ((resolve, reject) => {
    hash.generate(password, (err, hash) => {
      if (err) reject(err)
      const uid = undefined
      db('users')
        .insert({user_name, first_name, last_name, hash})
        .then((user_id) =>{
          const uid = user_id
          console.log(uid)
          resolve(user_id)})
        .catch(err => reject(err))
    })
  })
}
function userExists (user_name, db) {
  return db('users')
    .where('user_name', user_name)
    .first()
}

function getUserByName (user_name, db) {
  return db('users')
    .where('user_name', user_name)
    .first()
}

// function setUpUsersDefaultDice(uid) {
//   console.log(`I am running the SetUsersDefaultTable`)
//   return db('dice_names')
//     .insert([{dice_name: 'Friday Night', user_id: uid},
//             {dice_name: 'Weekend Plans', user_id: uid},
//             {dice_name: 'Dinner Plans', user_id: uid}])
// }

module.exports = {
  createUser,
  userExists,
  getUserByName
}
