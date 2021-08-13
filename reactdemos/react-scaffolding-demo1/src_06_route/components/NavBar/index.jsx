import React, {Component} from 'react'
import MyNavLink from "../MyNavLink";

class NavBar extends Component {
  render() {
    return (
      <div className="col-xs-2 col-xs-offset-2">
        <div className="list-group">
          <MyNavLink to='/about'>About</MyNavLink>
          <MyNavLink to='/home'>Home</MyNavLink>
          {/*<NavLink className='list-group-item' to='/about'>About</NavLink>
          <NavLink className='list-group-item' to='/home'>Home</NavLink>*/}
        </div>
      </div>
    );
  }
}

export default NavBar;