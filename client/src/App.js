import React, { Component } from 'react'
import Header from './Header'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Books from '../src/components/Books/Books'
// import Books from './pages/Books'
// import Search from './pages/Search'
// import Nav from './components/Nav'
// import { Container } from './components/Grid'
// import { ToastContainer, Zoom } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
// import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Header />
        <Books />
      </div>
    )
  }
}
export default App
