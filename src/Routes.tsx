import * as React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import SiteHeader from './components/SiteHeader'
import IncomeForm from './components/IncomeForm'
import HoursResults from './components/HoursResults'

const Routes = (): JSX.Element => {
  return (
    <Router>
      <div className="Main">
        <SiteHeader />
        <Route exact={true} path="/" component={IncomeForm} />
        <Route path="/hours-results" component={HoursResults} />
      </div>
    </Router>
  )
}

export default Routes
