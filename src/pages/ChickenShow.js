import React, { Component } from 'react'

class ChickenShow extends Component {
  render() {
    return (
      <>
        <h3>See what is under the feathers</h3>
        { this.props.chicken &&
          <>
            <p>{this.props.chicken.name}</p>
            <p>{this.props.chicken.age}</p>
            <p>{this.props.chicken.enjoys}</p>
          </>
        }
      </>
    )
  }
}
export default ChickenShow