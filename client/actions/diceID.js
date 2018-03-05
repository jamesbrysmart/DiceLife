
export function addDiceID(id){
    console.log('action says: ',id)
    return {
        type: 'ADD_DICE_ID',
        id
    }
}