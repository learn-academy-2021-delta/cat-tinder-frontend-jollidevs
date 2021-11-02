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
                    <NavLink to="/chickenindex">Meet the Chickens</NavLink>
                </ul>
                <ul>
                    <NavLink to="/chickennew">Add a Chicken</NavLink>
                </ul>
            </div>
        </header>
    )
  }
}
export default Header