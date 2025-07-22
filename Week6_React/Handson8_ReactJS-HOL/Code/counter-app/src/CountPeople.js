import React, { Component } from 'react';

class CountPeople extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entryCount: 0,
      exitCount: 0
    };
  }

  updateEntry = () => {
    this.setState(prevState => ({
      entryCount: prevState.entryCount + 1
    }));
  };

  updateExit = () => {
    this.setState(prevState => ({
      exitCount: prevState.exitCount + 1
    }));
  };

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.counterBox}>
          <p>People Entered: <strong>{this.state.entryCount}</strong></p>
          <p>People Exited: <strong>{this.state.exitCount}</strong></p>
        </div>

        <div style={styles.buttonGroup}>
          <button onClick={this.updateEntry} style={styles.button}>Login</button>
          <button onClick={this.updateExit} style={styles.button}>Exit</button>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    border: '2px solid #000',
    display: 'inline-block',
    padding: '20px',
    borderRadius: '10px'
  },
  counterBox: {
    marginBottom: '20px',
    fontSize: '18px'
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px'
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer'
  }
};

export default CountPeople;
