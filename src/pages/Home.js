import React, { Component } from 'react'
import chickenLogo from '../assets/Moana2.png'

class Home extends Component {
  render() {
    return (
      <>
        <h1 style={{color:"#38817a", padding: "25px"}}>Welcome to Chicken Tinder</h1>
        <img style={{height: "525px"}}src={chickenLogo} alt="logo for Chicken Tinder"/>
      </>
    )
  }
}
export default Home