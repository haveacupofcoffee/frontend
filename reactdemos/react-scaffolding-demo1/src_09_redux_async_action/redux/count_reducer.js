import constants from './constants'

const initState = 0

const countReducer = (preState = initState, action)=>{
  const {type, data} = action
  switch (type) {
    case constants.INCREMENT:
      return preState + data
    case constants.DECREMENT:
      return preState - data
    default:
      return preState
  }
}

export default countReducer

