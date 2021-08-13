import constVars from "../const_vars/const_vars";
const initState = 0

export default function countReducer(preState = initState, action) {
  const {type, data} = action
  switch (type) {
    case constVars.INCREMENT:
      return preState + data
    case constVars.DECREMENT:
      return preState - data
    default:
      return preState
  }
}