import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Footer extends Component{
  render(){
    return(
        <footer>
            <div className="footer-links">
            <ul>
                <NavLink to="/">@ 2021 Charlean & Phil</NavLink>
            </ul>
            <ul>
                <NavLink to="/chickenindex">Meet All the chickens</NavLink>
            </ul>
            <ul>
                <NavLink to="/chickennew">Add a chicken</NavLink>
            </ul>
            </div>
        </footer>
    )
  }
}
export default Footer