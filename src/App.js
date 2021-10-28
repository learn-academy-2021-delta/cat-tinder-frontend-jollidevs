import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ChickenIndex from './pages/ChickenIndex'
import ChickenShow from './pages/ChickenShow'
import ChickenNew from './pages/ChickenNew'
import ChickenEdit from './pages/ChickenEdit'
import NotFound from './pages/NotFound'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import './App.css'

import chickens from './mockChickens.js'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      chickens: chickens
    }
  }

  render(){
    return(
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/chickenindex" component={ChickenIndex} />
          <Route path="/chickenshow" component={ChickenShow} />
          <Route path="/chickennew" component={ChickenNew} />
          <Route path="/chickenedit" component={ChickenEdit} />
          <Route component={NotFound}/>
        </Switch>
        <Footer/>
      </Router>
    )
  }
}
export default App