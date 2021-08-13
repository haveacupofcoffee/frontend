import {connect} from 'react-redux'

import {increment,decrement,asyncIncrement} from '../../redux/count_action';


import React, {Component} from 'react'

class Count extends Component {

  increment = ()=>{
    const {value} = this.selectElement
    this.props.increment(value * 1)
  }

  decrement = ()=>{
    const {value} = this.selectElement
    this.props.decrement(value * 1)
  }

  incrementIfSumIsOdd = ()=>{
    const {value} = this.selectElement
    const {count} = this.props
    if(count % 2 !== 0) {
      this.props.increment(value * 1)
    }
  }

  asyncIncrement = ()=>{
    const {value} = this.selectElement
    this.props.asyncIncrement(value * 1, 1000)

  }



  render() {
    console.log(this.props)
    return (
      <div>
        <h2>Current Sum: {this.props.count}</h2>
        <select ref={s => this.selectElement = s}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;

        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfSumIsOdd}>+ if Current Sum is Odd</button>&nbsp;
        <button onClick={this.asyncIncrement}>Async +</button>
      </div>
    );
  }
}

export default connect(
  state =>({count:state.count}),
  {
    increment,
    decrement,
    asyncIncrement
  }
)(Count)