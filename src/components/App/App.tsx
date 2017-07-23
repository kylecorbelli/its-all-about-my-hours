import * as React from 'react'
import SplashScreen from '../SplashScreen'
import SiteHeader from '../SiteHeader'
import './App.css'

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="App">
        <SiteHeader />
        <SplashScreen shouldComponentBeHidden={false}/>
      </div>
    )
  }
}

export default App
