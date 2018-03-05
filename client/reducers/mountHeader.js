
export default function HeaderIsMount(state=false, action) {
    switch (action.type){
        case 'SET_HEADER_TO_MOUNTED':
          return true
        default:
          return state
    }
}