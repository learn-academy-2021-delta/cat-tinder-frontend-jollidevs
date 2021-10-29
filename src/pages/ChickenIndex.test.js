import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ChickenIndex from './ChickenIndex'

Enzyme.configure({ adapter: new Adapter() })

describe('When ChickenIndex loads...',() => {
    it ('displays a heading', () => {
        const chickenIndexWrapper = shallow(<ChickenIndex/>)
        expect(chickenIndexWrapper.find('h3').text()).toEqual('Mingle in the Coop')
    })    
})