import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Footer extends Component{
  render(){
    return(
        <footer>
            <ul>
                <NavLink to="/">&copy: 2021 Charlean & Phil</NavLink>
            </ul>
            <ul>
                <NavLink to="/chickenindex">Meet All the chickens</NavLink>
            </ul>
            <ul>
                <NavLink to="/chickennew">Add a chicken</NavLink>
            </ul>
        </footer>
    )
  }
}
export default Footer