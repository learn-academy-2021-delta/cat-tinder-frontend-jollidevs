import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App'
import Home from './pages/Home'
import ChickenIndex from './pages/ChickenIndex'
import ChickenShow from './pages/ChickenShow'
import chickens from './mockChickens.js'

Enzyme.configure({ adapter: new Adapter() })

describe('When the app renders', ()=>{
  it('displays a header and footer', ()=>{
    const renderedApp = shallow(<App/>)
    const renderedHeader = renderedApp.find("Header")
    const renderedFooter = renderedApp.find("Footer")
    expect(renderedHeader.length).toEqual(1)
    expect(renderedFooter.length).toEqual(1)
  })

  it('provides a route "/" to the home component', () => {
    const renderedApp = shallow(<App/>)
    const home = renderedApp.find('[path="/"]')
    expect(home.props().component).toEqual(Home)
  })

  it('provides a route "/chickenindex" to the ChickenIndex component', () => {
    const renderedApp = shallow(<App/>)
    const chickenIndex = renderedApp.find('[path="/chickenindex"]')
    const chickenIndexRender = chickenIndex.props().render
    expect(chickenIndexRender.length).toEqual(1)
  })

  it('provides a route "/chickenshow" to the ChickenShow component', () => {
    const renderedApp = shallow(<App/>)
    const chickenShow = renderedApp.find('[path="/chickenshow/:id"]')
    const chickenShowRender = chickenShow.props().render
    expect(chickenShowRender.length).toEqual(1)
  })
})