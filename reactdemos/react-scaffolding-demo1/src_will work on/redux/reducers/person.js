import {CONSTS_FOR_PERSON} from '../constans'

const initState = []

const personReducer = (preState = initState, action) => {
  const {type, data}  = action
  switch (type) {
    case CONSTS_FOR_PERSON.ADD:
      return [data, ...preState]
    default:
      return preState
  }
}

export default personReducer
