import React, { Component } from 'react';
import './App.css';

class CountPeople extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entryCount: 3,
      exitCount: 2
    };
  }

  UpdateEntry = () => {
    this.setState({ entryCount: this.state.entryCount + 1 });
  };

  UpdateExit = () => {
    this.setState({ exitCount: this.state.exitCount + 1 });
  };

  render() {
    return (
      <div className="container">
        <div className="entry">
          <button onClick={this.UpdateEntry}>Login</button>
          <span>{this.state.entryCount} People Entered!!!</span>
        </div>
        <div className="exit">
          <button onClick={this.UpdateExit}>Exit</button>
          <span>{this.state.exitCount} People Left!!!</span>
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <CountPeople />
    </div>
  );
}

export default App;
