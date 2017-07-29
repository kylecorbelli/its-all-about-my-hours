import { createStore } from 'redux'
import rootReducer from './reducers'
import initialState from './initialState'

const configureStore = () => {
  return createStore(
    rootReducer,
    initialState,
    /* tslint:disable */ window['devToolsExtension'] && window['devToolsExtension'](),
  )
}

export default configureStore
