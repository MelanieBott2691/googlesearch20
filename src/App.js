import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Save from './components/Save/Save';
import Search from './pages/Search';
import Saved from './pages/Saved';
import Nav from './components/Nav/Nav';
// import NoMatch from './pages/NoMatch'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Jumbotron />
          <Switch>
            <Route exact path="/" component={Search} />

            <Route exact path="/search" component={Search} />

            <Route exact path="/saved" component={Saved} />
            <Route exact path="/save" component={Save} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
