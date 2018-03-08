import * as actions from '../../../client/actions/users'

test('requests users', ()=> {
    const actual = {
        type: 'REQUEST_USERS',
    }
    expect(actions.requestUsers()).toEqual(actual)
})

test('recieves users', ()=> {
    const users = {}
    const actual = {
        type: 'RECEIVE_USERS',
        users
    }
    expect(actions.receiveUsers(users)).toEqual(actual)
})