import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import chickenLogo2 from '../assets/Prissy1.jpeg'

class Header extends Component{
  render(){
    return(
        <header>
            <NavLink to="/">
                
            </NavLink>
            <img style={{display: "block", marginLeft: "auto", marginRight: "auto"}}src={chickenLogo2} alt="logo for Chicken Tinder" className="chicken-logo"/>
            <div className="nav-links">
                <ul>
                    <button style={{fontSize: "25px", borderRadius: "25px", backgroundColor: "#848484"}}>
                    <NavLink to="/chickenindex">Meet the Chickens</NavLink>
                    </button>
                </ul>
                <ul>
                    <button style={{fontSize: "25px", borderRadius: "25px", backgroundColor: "#848484"}}>
                    <NavLink to="/chickennew">Add a Chicken</NavLink>
                    </button>
                </ul>
                <button style={{fontSize: "25px", borderRadius: "25px", backgroundColor: "#848484"}}>
                <a target='blank'href="https://safehavenfarmsanctuary.org/our-animals/chickens/" id="safehaven">Adopt a Chicken!</a>
                </button>
            </div>
        </header>
    )
  }
}
export default Header