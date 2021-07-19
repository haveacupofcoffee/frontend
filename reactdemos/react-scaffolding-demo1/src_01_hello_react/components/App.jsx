import React, {Component} from 'react'
import logo from '../logo.svg'


export default class App extends Component {
  render() {
    return (
      <div>
        <img className='logo' src= {logo} alt="log"/>
        <p className='title'>React is Awesome!</p>
      </div>
    )
  }
}
