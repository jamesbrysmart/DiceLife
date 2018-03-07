export function addUserID (id) {
    console.log({id})
    return {
        type: 'ADD_USER_ID',
        id
    }
}
