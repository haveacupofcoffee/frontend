import React, {Component} from 'react';

class Count extends Component {

  state = {
    count : 0
  }

  increment = () => {
    const {value} = this.selectElement
    const {count} = this.state
    this.setState({count: count + value * 1})
  }

  decrement = () => {
    const {value} = this.selectElement
    const {count} = this.state
    this.setState({count: count - value * 1})
  }

  incrementWhenSumIsOdd = () => {
    const {value} = this.selectElement
    const {count} = this.state
    if(count % 2 !== 0) {
      this.setState({count: count + value * 1})
    }

  }

  asyncIncrement = () => {
    const {value} = this.selectElement
    const {count} = this.state
    setTimeout(()=> {
      this.setState({count: count + value * 1})
    }, 1000)
  }

  render() {
    return (
      <div>
        <h2>Current Sum : {this.state.count}</h2>
        <select ref={s => this.selectElement = s}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>Increment</button>&nbsp;
        <button onClick={this.decrement}>Decrement</button>&nbsp;
        <button onClick={this.incrementWhenSumIsOdd}>Increment When the Sum is Odd</button>&nbsp;
        <button onClick={this.asyncIncrement}>Async Increment</button>&nbsp;
      </div>
    );
  }
}

export default Count;