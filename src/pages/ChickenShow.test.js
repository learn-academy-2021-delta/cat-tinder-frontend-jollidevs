import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ChickenShow from './ChickenShow'

Enzyme.configure({ adapter: new Adapter() })

describe('When ChickenShow loads...',() => {
    it ('displays a heading', () => {
        const chickenShow = shallow(<ChickenShow/>)
        const showHeading = chickenShow.find('h3')
        expect(showHeading.text()).toEqual('See what is under the feathers')
    })    
})