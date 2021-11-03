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

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      chickens: [], 
      color: "#f7f39a"
    }
  }

componentDidMount(){
  this.readChicken()
}

readChicken = () => {
  fetch("http://localhost:3000/chickens")
  .then(response => response.json())
  .then(chickenArray => this.setState({chickens: chickenArray}))
  .catch(errors => (console.log(errors)))
 
}

  createNewChicken = (newchicken) => {
    fetch("http://localhost:3000/chickens", {
      body: JSON.stringify(newchicken),
      headers: {
        "Content-Type" : "application/json"
      },
      method: "POST"
    })
    .then(response => response.json())
    .then(payload => this.readChicken())
    .catch(errors => (console.log(errors)))
  }

  updateChicken = (editedChicken, id) => {
    fetch(`http://localhost:3000/chickens/${id}`,{
      body: JSON.stringify(editedChicken),
      headers: {
        "Content-Type" : "application/json"
      },
      method: "PATCH"
    })
    .then(response => response.json())
    .then(payload => this.readChicken())
    .catch(errors => (console.log(errors)))
  }

  deleteChicken = (id) => {
    fetch(`http://localhost:3000/chickens/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
    .then(response => response.json())
    .then(payload => this.readChicken())
    .catch(errors => console.log("delete errors:", errors))
  }

  render(){
    return(
      <div style={{ background: this.state.color }} id="main">
      <Router>
        <Header />
        <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/chickenindex"
            render={(props) => <ChickenIndex chickens={this.state.chickens} />} />
          <Route path="/chickenshow/:id"
            render={(props) => {
              let id = props.match.params.id
              let chicken = this.state.chickens.find(c => c.id === +id)
              return <ChickenShow chicken={chicken} deleteChicken={this.deleteChicken} />
            }} />
          <Route path="/chickennew" render={(props) => <ChickenNew createNewChicken={this.createNewChicken} />}
          />
          <Route path="/chickenedit/:id"
              render={(props) => {
                let id = props.match.params.id
                let chicken = this.state.chickens.find(c => c.id === +id)
                return <ChickenEdit chicken={chicken} updateChicken={this.updateChicken } id={id} />
              }}
            /> 
          <Route component={NotFound}/>
        </Switch>
        </div>
        <Footer/>
      </Router>
      </div>
    )
  }
}
export default App