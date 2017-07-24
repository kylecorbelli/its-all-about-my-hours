import * as React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import SiteHeader from './components/SiteHeader'
import IncomeForm from './components/IncomeForm'
import SplashScreen from './components/SplashScreen'

const Routes = () => {
  return (
    <Router>
      <div>
        <SiteHeader />
        <Route exact path="/" component={IncomeForm} />
        <SplashScreen shouldComponentBeHidden={true}/>
      </div>
    </Router>
  )
}

export default Routes
