import {CONSTS_FOR_COUNT} from '../constans'

const intiState = 0
const countReducer = (preState = intiState,action) => {
  const {type, data} = action
  switch (type) {
    case CONSTS_FOR_COUNT.INCREMENT:
      return preState + data
    case CONSTS_FOR_COUNT.DECREMENT:
      return preState - data
    default:
      return preState
  }
}

export default countReducer
