import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Dad Jokes Database</h1>
          <nav>
            <NavLink>
              Jokes
            </NavLink>
            <NavLink>
              Sign Up
            </NavLink>
            <NavLink>
              Sign In
            </NavLink>
            <NavLink>
              Sign Out
            </NavLink>
          </nav>
        </header>
      </div>
    );
  }
}

export default App;
