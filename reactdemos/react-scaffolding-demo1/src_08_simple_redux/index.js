import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import store from './redux/store'

ReactDOM.render(<App/>,document.getElementById('root'))

//scenario 2: subscribe store
store.subscribe(() => {
  ReactDOM.render(<App/>, document.getElementById('root'))
})

