import './setup-dom'
import React from 'react'
import Enzyme, {shallow, mount, render} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import App from '../../client/components/App'

Enzyme.configure({adapter: new Adapter()})

App.prototype.componentDidMount = () => {}

test('Shows heading', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find('h1').text()).toBe('Widgets FTW!')
})
