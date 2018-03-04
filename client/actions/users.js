import request from '../utils/api'

function requestUsers() {
    return {
      type: 'REQUEST_USERS'
    }
  }
  
  function receiveUsers(users) {
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
        dispatch(showError(err.message))
        })
    }
    }