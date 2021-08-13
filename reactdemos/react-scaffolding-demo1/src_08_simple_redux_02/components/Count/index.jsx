import React, {Component} from 'react';

import constVars from "../../const_vars/const_vars";
import store from '../../redux/store'

const ODD_INCREMENT = 'odd increment'

class Count extends Component {

  calculate  = (type) => {
    const value = this.selectElement.value * 1
    switch (type) {
      case constVars.INCREMENT:
        store.dispatch({type, data:value})
        break;
      case constVars.DECREMENT:
        store.dispatch({type, data: value})
        break;
      case ODD_INCREMENT:
        const count = store.getState()
        if(count % 2 !== 0) store.dispatch({type:constVars.INCREMENT, data: value})
        break;
      default:
        setTimeout(() => {
          store.dispatch({type:constVars.INCREMENT, data: value})
        }, 1000)
    }
  }

  render() {
    return (
      <div>
        <h2>Current Sum: {store.getState()}</h2>
        <select ref={s => this.selectElement = s}>
          <option value="1" id="">1</option>
          <option value="2" id="">2</option>
          <option value="3" id="">3</option>
        </select>&nbsp;
        <button onClick={() => this.calculate(constVars.INCREMENT)}>+</button>&nbsp;
        <button onClick={() => this.calculate(constVars.DECREMENT)}>-</button>&nbsp;
        <button onClick={() => this.calculate(ODD_INCREMENT)}>Increment When Sum is Odd</button>&nbsp;
        <button onClick={() => this.calculate()}>Async Increment</button>&nbsp;
      </div>
    );
  }
}

export default Count;