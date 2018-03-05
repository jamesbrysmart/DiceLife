
export default function userID(state=[], action) { 
    switch (action.type) {
      case 'ADD_USER_ID':
      console.log('reducer gets called')
      console.log('reducer says: ',action.id)
      return action.id 
      default:
        return state
    }
  }

  