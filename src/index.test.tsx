import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Routes from './Routes'
import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'

const store = configureStore()

it('renders without crashing', () => {
  const div: HTMLElement = document.createElement('div')
  ReactDOM.render(
    <Provider store={store}>
      <Routes />
    </Provider>,
    div,
  )
})
