import constants from './constants'

export const createIncrementAction = data => ({type:constants.INCREMENT, data})
export const createDecrementAction = data => ({type:constants.DECREMENT, data})

export const createAsyncIncrementAction = (data,time) =>
  (dispatch) => setTimeout(
    () => dispatch(createIncrementAction(data)), time
)





