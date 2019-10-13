import * as renderer from 'react-test-renderer'
import {mount} from 'enzyme'
import React from 'react' 
import Icon from '../Icon'

describe('icon', () => {
  it('icon render successful', () => {
    const json = renderer.create(<Icon name='wechat' />).toJSON()
    expect(json).toMatchSnapshot()
  })

  it('icon onClick', () => {
    const fn = jest.fn()
    // const fn2 = jest.fn()
    
    const component = mount(<Icon name='wechat' onClick={fn} />)
    component.find('svg').simulate('click')
    expect(fn).toBeCalled()
  })
})