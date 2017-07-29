import { combineReducers } from 'redux'
import hasSplashScreenBeenShown from './hasSplashScreenBeenShown'

const rootReducer = combineReducers({
  hasSplashScreenBeenShown,
})

export default rootReducer
