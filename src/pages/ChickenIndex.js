import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Card, Button, CardTitle, Row, Col } from 'reactstrap'
import chickenLogo from '../assets/chicken-logo.png'


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
                    <NavLink to={`/chickenshow/${chicken.id}`}><Button>See what's beyond the feathers</Button></NavLink>
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