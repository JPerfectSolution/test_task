import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import configureStore from './configureStore'
import { Provider } from 'react-redux'
import App from './containers/App'
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)

const store = configureStore()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
