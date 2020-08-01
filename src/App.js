import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Jumbotron from './components/Jumbotron/Jumbotron'
import BookList from './components/BookList/BookList'
import Search from './components/Search/Search'
import Saved from './components/Save/Save'

import './App.css'

class App extends Component {
  render () {
    return (
      <Router>
        <div className='App'>
          <Jumbotron />
          <Switch>
            <Route exact path='/' component={Search} />
            {/* renders the Search page when "/search" route is hit */}
            <Route exact path='/search' component={Search} />
            {/* renders the Saved page when "/saved" route is hit */}
            <Route exact path='/saved' component={Saved} />
          </Switch>
          <BookList />
        </div>
      </Router>
    )
  }
}
export default App
