import React, { Component } from 'react'
import { Button, Card, CardTitle, CardText } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import chickenLogo from '../assets/Prissy1.jpeg'

class ChickenShow extends Component {
 render() {
   let {chicken} = this.props
   return (
     <div className="page-body">
       {chicken &&
        <Card body className="card-show">
          <CardTitle tag="h5">Meet {chicken.name}</CardTitle>
          <h2><img style={{width: "50px"}} src={chickenLogo} alt="logo for Chicken Tinder"/></h2>
          <CardText>I have been pecking for {chicken.age} years</CardText>
          <CardText>I keep myself tender by {chicken.enjoys}</CardText>
          <NavLink to={`/Chickenedit/${chicken.id}`}>
            <Button>Has anything changed?</Button>
          </NavLink>
          <br />
          <NavLink to="/chickenindex">
            <Button onClick={() => this.props.deleteChicken(chicken.id)}>
              Set this chicken free
            </Button>
          </NavLink>
        </Card>
       }
     </div>
   )
 }
}
export default ChickenShow