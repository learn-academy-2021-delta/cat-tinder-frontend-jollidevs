import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ChickenNew from './ChickenNew'

Enzyme.configure({ adapter: new Adapter() })

describe('When ChickenNew loads...',() => {
    it ('displays a form', () => {
        const chickenNewWrapper = shallow(<ChickenNew/>)
        const formGroup = chickenNewWrapper.find("FormGroup")
        expect(formGroup.length).toEqual(3)
    })    
})