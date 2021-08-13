import React, {Component} from 'react'
import {connect} from 'react-redux'
import {increment, decrement, incrementAsync} from '../../redux/count_action'


class Count extends Component {

  increment = () => {
    const value = this.selectElement.value * 1
    this.props.increment(value)
  }

  decrement = () => {
    const value = this.selectElement.value * 1
    this.props.decrement(value)
  }

  incrementIfSumIsOdd = () => {
    const value = this.selectElement.value * 1
    const count = this.props.count
    if(count % 2 !== 0) {
      this.props.increment(value)
    }
  }

  incrementAsync = () => {
    const value = this.selectElement.value * 1
    this.props.incrementAsync(value , 1000)
  }


  render() {
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
        <button onClick={this.incrementIfSumIsOdd}>+ If Current Sum is Odd</button>&nbsp;
        <button onClick={this.incrementAsync}>+ Async</button>
      </div>
    );
  }
}

export default connect(
  state => ({count: state}),
  {
    increment,
    decrement,
    incrementAsync
  }
)(Count);