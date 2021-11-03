import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import chickenLogo from '../assets/Chicken1-removebg-preview (1).png'

class Header extends Component{
  render(){
    return(
        <header>
            <NavLink to="/">
                <img src={chickenLogo} alt="logo for Chicken Tinder" className="chicken-logo"/>
            </NavLink>
            <div className="nav-links">
                <ul>
                    <button style={{backgroundColor: "#848484"}}>
                    <NavLink to="/chickenindex">Meet the Chickens</NavLink>
                    </button>
                </ul>
                <ul>
                    <button style={{backgroundColor: "#848484"}}>
                    <NavLink to="/chickennew">Add a Chicken</NavLink>
                    </button>
                </ul>
            </div>
        </header>
    )
  }
}
export default Header