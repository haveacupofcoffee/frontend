import {CONSTS_FOR_COUNT} from '../constans'

export const increment = data => ({type:CONSTS_FOR_COUNT.INCREMENT, data})
export const decrement = data => ({type:CONSTS_FOR_COUNT.DECREMENT, data})

export const incrementAsync = (data,time) =>
  dispatch => setTimeout(() => dispatch(increment(data)), time)
