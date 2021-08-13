import React, {Component} from 'react';
import store from '../../redux/store'

class Count extends Component {

  //scenario 1: subscribe , the other way to do is in index.js
 /* componentDidMount() {
    store.subscribe(() => {
      this.setState({})
    })
  }*/

  increment = () => {
    const {value} = this.selectElement
    store.dispatch({type:'increment', data: value*1})
  }

  decrement = () => {
    const {value} = this.selectElement
    store.dispatch({type:'decrement', data: value*1})
  }

  incrementWhenSumIsOdd = () => {
    const {value} = this.selectElement
    const count = store.getState()
    if(count % 2 !== 0) {
      store.dispatch({type:'increment', data: value*1})
    }

  }

  asyncIncrement = () => {
    const {value} = this.selectElement
    setTimeout(()=> {
      store.dispatch({type:'increment', data: value*1})
    }, 1000)
  }

  render() {
    return (
      <div>
        <h2>Current Sum : {store.getState()}</h2>
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