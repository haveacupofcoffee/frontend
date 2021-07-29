import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class MyNavLink extends Component {
  render() {
    return (
      <NavLink className='list-group-item' {...this.props}></NavLink>
    );
  }
}

export default MyNavLink;