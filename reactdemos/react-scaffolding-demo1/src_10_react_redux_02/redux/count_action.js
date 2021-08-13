import CONST_VARS from './constants'

export const increment = data => ({type:CONST_VARS.INCREMENT, data})
export const decrement = data => ({type:CONST_VARS.DECREMENT, data})
export const incrementAsync = (data,time) =>
  (dispatch) => setTimeout(() => dispatch(increment(data)), time)



