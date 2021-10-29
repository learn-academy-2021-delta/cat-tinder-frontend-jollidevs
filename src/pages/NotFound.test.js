import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NotFound from './Notfound'

Enzyme.configure({ adapter: new Adapter() })

describe('When Notfound loads...',() => {
    it ('displays a heading', () => {
        const notFoundWrapper = shallow(<NotFound/>)
        expect(notFoundWrapper.find('h3').text()).toEqual('Ooops, no chickens here!')
    })    
})