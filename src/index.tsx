import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Routes from './Routes'
import configureStore from './redux/configureStore'
import './styles/index.css'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root') as HTMLElement
)
