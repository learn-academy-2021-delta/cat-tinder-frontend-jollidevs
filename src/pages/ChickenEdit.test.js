import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ChickenEdit from './ChickenNew'

Enzyme.configure({ adapter: new Adapter() })

describe('When ChickenEdit loads...',() => {
    it ('displays a form', () => {
        const chickenEditWrapper = shallow(<ChickenEdit/>)
        const formGroup = chickenEditWrapper.find("FormGroup")
        expect(formGroup.length).toEqual(3)
    })    
})