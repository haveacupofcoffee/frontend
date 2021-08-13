import constants from './constants'

const initState = {count:0}

const countReducer = (preState = initState, action)=>{
  const {type, data} = action
  switch (type) {
    case constants.INCREMENT:
      return {count:preState.count + data}
    case constants.DECREMENT:
      return {count:preState.count - data}
    default:
      return {count:preState.count}
  }
}

export default countReducer

