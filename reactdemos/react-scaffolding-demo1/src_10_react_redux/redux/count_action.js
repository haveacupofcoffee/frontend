import constants from './constants'

export const increment = data => ({type:constants.INCREMENT, data})
export const decrement = data => ({type:constants.DECREMENT, data})

export const asyncIncrement = (data,time) =>
  (dispatch) => setTimeout(() => dispatch(increment(data)), time)





