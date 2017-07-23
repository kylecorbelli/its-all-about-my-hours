import * as React from 'react'
import SplashScreen from '../SplashScreen'
import './App.css'

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="App">
        <SplashScreen />
        And hello!
      </div>
    )
  }
}

export default App
