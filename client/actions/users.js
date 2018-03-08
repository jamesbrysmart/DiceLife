import request from '../utils/api'

export function requestUsers() {
    return {
      type: 'REQUEST_USERS'
    }
  }
  
 export function receiveUsers(users) {
    return {
      type:'RECEIVE_USERS',
      users
    }
  }

  export function getUsers () {
      return function(dispatch) {
        dispatch(requestUsers())
        request('get', 'users')
        .then(res => {
            dispatch(receiveUsers(res.body))
        })
        .catch(err => {
         console.log(err.message)
        })
    }
    }