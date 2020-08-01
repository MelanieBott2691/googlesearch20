import React, { Component } from 'react'
import Jumbotron from './components/Jumbotron/Jumbotron'
import BookList from './components/BookList/BookList'

import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Jumbotron />
        <BookList />
      </div>
    )
  }
}
export default App
