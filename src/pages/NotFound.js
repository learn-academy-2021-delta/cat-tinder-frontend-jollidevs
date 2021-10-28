import React, { Component } from 'react'
import notChicken from '../assets/not-chicken.jpeg'

class NotFound extends Component {
  render() {
    return (
      <div className="page-body">
        <h3>Ooops, no chickens here!</h3>
        <img src={notChicken} alt="no plucking today" className="chicken-friend" />
      </div>
    )
  }
}
export default NotFound