import React, { Component } from 'react'
import logo from '../../img/logo.png'

import './dashboardStyle.css'


class Header extends Component {
  
  render() {
    const { fullName } = this.props;

    return(
      <div className="header-container" > 
        <img src={logo} alt="Logo" className="header-image" />
        <menu className="header-menu">
          <li><a href="/#">Find</a></li>
          <li><a href="/#">Your Office</a></li>
          <li><a href="/#">How It Works</a></li>
          <li><a href="/#">Ask Us</a></li>
        </menu>
        <p className="header-fullname">{fullName()}</p>
      </div>
    )
  }
}

export default Header;