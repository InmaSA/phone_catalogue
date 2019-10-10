import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'

// importamos Provider de react-redux para envolver el router con App y hacerlos conscientes del estado del store

import {Provider} from 'react-redux'
import store from './redux/store'


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>, document.getElementById('root')
)

