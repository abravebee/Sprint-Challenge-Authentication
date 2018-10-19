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
      <div>
        <h2>Dad Jokes Galore</h2>
        <ul>
        
       {this.state.jokes.map(j => (
            <div key={j.id}>
            <p>{j.setup}</p>
            <p>{j.punchline}</p>
            </div>
            
          ))}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    const token = localStorage.getItem('jwt');    

    const endpoint = '';
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
