
export default function diceID(id){
    console.log('action: ', id)
    console.log('hello from the action')
    return {
        type: 'ADD_DICE_ID',
        id
    }
}