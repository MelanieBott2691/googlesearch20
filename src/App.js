import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Jumbotron from './components/Jumbotron/Jumbotron'
// import BookList from './components/BookList/BookList'
import Search from './pages/Search'
import Saved from './pages/Saved'
import Nav from './components/Nav/Nav'
// import NoMatch from './pages/NoMatch'
import './App.css'

class App extends Component {
  render () {
    return (
      <Router>
        <div className='App'>
          <Nav />
          <Jumbotron />
          <Switch>
            <Route exact path='/' component={Search} />
            {/* renders the Search page when "/search" route is hit */}
            <Route exact path='/search' component={Search} />
            {/* renders the Saved page when "/saved" route is hit */}
            <Route exact path='/saved' component={Saved} />
          </Switch>
          {/* <BookList /> */}
        </div>
      </Router>
    )
  }
}
export default App
