import * as React from 'react'
import SplashScreen from '../SplashScreen'
import SiteHeader from '../SiteHeader'
import IncomeForm from '../IncomeForm'
import './App.css'

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="App">
        <SiteHeader />
        <IncomeForm />
        <SplashScreen shouldComponentBeHidden={true}/>
      </div>
    )
  }
}

export default App
