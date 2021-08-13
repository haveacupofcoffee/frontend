import CONST_VARS from './constants'

const initState = 0

export default function countReducer(preState = initState, action) {
  const {type, data} = action
  switch (type) {
    case CONST_VARS.INCREMENT:
      return preState + data
    case CONST_VARS.DECREMENT:
      return preState - data
    default:
      return preState
  }
}
