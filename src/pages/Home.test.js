import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from '.pages/Home'

Enzyme.configure({ adapter: new Adapter() })

describe('When Home loads...',() => {
    it ("displays a heading"), () => {
        const homeWrapper = shallow(<Home/>)
        const navLinkWrapper = homeWrapper.find("h3")
        expect(navLinkWrapper.text()).toEqual("Home is where the coop is")
 } })


