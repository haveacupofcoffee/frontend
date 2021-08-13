import React, {Component} from 'react'

import store from '../../redux/store'
import {createIncrementAction, createDecrementAction, createAsyncIncrementAction} from '../../redux/count_action';


class Count extends Component {

  increment = ()=>{
    const {value} = this.selectElement
    store.dispatch(createIncrementAction(value * 1))
  }

  decrement = ()=>{
    const {value} = this.selectElement
    store.dispatch(createDecrementAction(value * 1))
  }

  incrementIfSumIsOdd = ()=>{
    const {value} = this.selectElement
    const count = store.getState()
    if(count % 2 !== 0) {
      store.dispatch(createIncrementAction(value * 1))
    }
  }

  asyncIncrement = ()=>{
    const {value} = this.selectElement
    store.dispatch(createAsyncIncrementAction(value * 1, 1000))

  }



  render() {
    return (
      <div>
        <h2>Current Sum: {store.getState()}</h2>
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

export default Count;