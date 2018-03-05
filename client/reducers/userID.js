
export default function userID(state=[], action) {  
    switch (action.type) {
      case 'ADD_USER_ID':
      return action.id 
      default:
        return state
    }
  }