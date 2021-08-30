import React, {Component} from 'react';
import {connect} from 'react-redux'

import {
  increment,
  decrement,
  incrementAsync
} from '../../redux/actions/count';



class Count extends Component {


  increment = () => {
    const {value} = this.selectElement
    console.log(value)
    this.props.increment(value * 1)
  }

  decrement = () => {
    const {value} = this.selectElement
    this.props.decrement(value * 1)
  }

  incrementIfCurrSumIsOdd = () => {
    const {value}  = this.selectElement
    const {count} = this.props
    if(count % 2 !== 0) {
      this.props.increment(value * 1)
    }
  }

  incrementAsync = () => {
    const {value} = this.selectElement
    this.props.incrementAsync(value * 1)
  }


  render() {
    return (
      <div>
        <h2>Current Sum: {this.props.count}</h2>
        <h2>Number of Person: {this.props.personsCount}</h2>

        <select ref={s => this.selectElement = s}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>

        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfCurrSumIsOdd}>+ If Current Sum is Odd</button>&nbsp;
        <button onClick={this.incrementAsync}>+ Async</button>
      </div>
    );
  }
}

export default connect(
  state => ({count:state.count, personsCount:state.persons.length}),
  {
    increment,
    decrement,
    incrementAsync

  }
)(Count);