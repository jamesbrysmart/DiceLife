import setHeaderToMounted from '../../../client/actions/header'

test('adds DiceID action', () => {
    const actual = {
      type: 'SET_HEADER_TO_MOUNTED'
    }
    expect(setHeaderToMounted()).toEqual(actual)
  })