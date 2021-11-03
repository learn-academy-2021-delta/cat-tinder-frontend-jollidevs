import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ChickenShow from './ChickenShow'

Enzyme.configure({ adapter: new Adapter() })

describe('When ChickenShow loads',() => {
    const chicken = {
          id: 1,
          name: "Biscuits",
          age: 5,
          enjoys: "rooftops and trees"
        }
    it ('displays a card', () => {
        const chickenShow = shallow(<ChickenShow chicken={chicken}/>)
        const card = chickenShow.find("Card")
        expect(card.length).toEqual(1)
    })    
})