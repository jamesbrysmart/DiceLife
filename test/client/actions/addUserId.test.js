import addUserID from '../../../client/actions/userID'

test('adds userID', ()=> {
    const id = 1
    const actual = {
        type: 'ADD_USER_ID',
        id
    }
    expect(addUserID(id)).toEqual(actual)
})