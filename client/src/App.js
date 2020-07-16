import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Import components
import NavBar from './components/NavBar'
import NavBar from './components/Header'
import NavBar from './components/Wrapper'

// Import from pages folder
import Search from './pages/Search'
import NoMatch from './pages/NoMatch'
import Saved from './pages/Saved'

import './App.css'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <NavBar></NavBar>
          <Header></Header>
          <Wrapper>
            <Route exact path='/' component={Search} />
            <Route exact path='/search' component={Search} />
            <Route exact path='/saved' component={Saved} />
            <Route exact path='/noMatch' component={NoMatch} />
          </Wrapper>
        </div>
      </Router>
    )
  }
}
export default App
