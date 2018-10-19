import React, { Component } from 'react';
import axios from 'axios';

class Jokes extends Component {
  state = {
    jokes: [],
  };

  render() {
    if (!this.state.jokes || !this.state.jokes.length) {
      return (
          <div><h1>It's Serious Business Around Here</h1>
              <h3>Only registered users can access the jokes database.</h3>
              <p>Please sign up for an account, or sign in if you are already registered.</p></div>
      )
  }

    return (
     
        <div class="jokes-wrapper">
        
       {this.state.jokes.map(j => (
            <div key={j.id} class="joke">
            <p class="setup">{j.setup}</p>
            <p class="punchline">{j.punchline}</p>
            </div>
            
          ))}
        </div>
      
    );
  }

  componentDidMount() {
    const token = localStorage.getItem('jwt');    
    
    const endpoint = 'http://localhost:3300/api/jokes';
    const options = {
      headers: {
        Authorization: token,
      },
    };
    
    axios
      .get(endpoint, options)
      .then(res => {
        
        this.setState({ jokes: res.data }, () => console.log("this.state", this.state));
        
        console.log();
      })
      .catch(err => {
        console.error('ERROR', err);
      });
  }
}

export default Jokes;
