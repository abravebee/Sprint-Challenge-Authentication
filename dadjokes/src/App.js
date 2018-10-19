import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';

import './App.css';

import Jokes from './components/Jokes';
import Signin from './components/Signin';
import Signup from './components/Signup';

const Home = props => {
  return (
    <div>
      <h1>Welcome.</h1>
      <h3>Use the links above to navigate.</h3>
    </div>
  );
};

class App extends Component {

  signout = () => {
    localStorage.removeItem('jwt');
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Dad Jokes Database</h1>
          <nav>
            <NavLink
              exact to="/">
              Home
            </NavLink>
            <NavLink
              exact to="/jokes">
              Jokes
            </NavLink>
            <NavLink
              exact to="/signup">
              Sign Up
            </NavLink>
            <NavLink
              exact to="/signin">
              Sign In
            </NavLink>
            <NavLink
              exact to="/home"
              onClick={this.signout}>
              Sign Out
            </NavLink>
          </nav>
        </header>
        <main>
          <Route 
            path="/" 
            component={Home} 
            exact />
          <Route 
            path="/jokes" 
            component={Jokes} />
          <Route path="/signin" 
            component={Signin} />
          <Route path="/signup" 
            component={Signup} />
        </main>
      </div>
    );
  }
}

export default App;
