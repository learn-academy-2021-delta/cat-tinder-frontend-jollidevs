import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Card, Button, CardTitle, Row, Col } from 'reactstrap'
import chickenLogo from '../assets/chicken-logo.png'
import chickenLogo2 from '../assets/Prissy1.jpeg'

class ChickenIndex extends Component {
  render() {
    return (
      <>
        <h3>Mingle in the Coop</h3>
        <div className="index-cards">
        {this.props.chickens && this.props.chickens.map(chicken => {
            return (
              <Row key={chicken.id}>
                <Col sm="6">
                  <Card className="card" body>
                    <CardTitle tag="h5">Hi, my name is {chicken.name}</CardTitle>
                    <h2><img style={{width: "50px"}} src={chickenLogo} alt="logo for Chicken Tinder"/></h2>
                    <NavLink to={`/chickenshow/${chicken.id}`}><Button>More Info Here</Button></NavLink>
                  </Card>
                </Col>
              </Row>
            )
          })}
        </div>
      </>
    )
  }
}
export default ChickenIndex