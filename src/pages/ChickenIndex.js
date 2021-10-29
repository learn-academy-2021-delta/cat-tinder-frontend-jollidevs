import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class ChickenIndex extends Component {
  render() {
    return (
      <>
        <h3>Mingle in the Coop</h3>
        {this.props.chickens && this.props.chickens.map(chicken => {
          return (
            <p key={chicken.id}>
              <NavLink to={`/chickenshow/${chicken.id}`}>
                {chicken.name}
              </NavLink>
            </p>
          )
        })}
      </>
    )
  }
}
export default ChickenIndex