import reducer from '../../../client/reducers/mountHeader'

test('mountHeader inital state', () => {
    expect(reducer(undefined, {})).toEqual(false)
  })
  
  test('ADD_DICE_ID processes', () => {
    const action = true
    const actual = reducer([], {
      type: 'SET_HEADER_TO_MOUNTED',
      action
    })
    expect(actual).toEqual(true)
  })