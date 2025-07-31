import React, { Component } from 'react';

class ComplaintRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ename: '',
      complaint: '',
      numberHolder: Math.floor(100000 + Math.random() * 900000) // random 6-digit number
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    const msg = `Thanks ${this.state.ename}! Your complaint was submitted.\nReference ID: ${this.state.numberHolder}`;
    alert(msg);
    event.preventDefault();
  };

  render() {
    return (
      <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto', border: '2px solid green' }}>
        <h2>Raise a Complaint</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Employee Name:</label><br />
            <input
              type="text"
              name="ename"
              value={this.state.ename}
              onChange={this.handleChange}
              required
            />
          </div>
          <br />
          <div>
            <label>Complaint:</label><br />
            <textarea
              name="complaint"
              value={this.state.complaint}
              onChange={this.handleChange}
              rows="4"
              cols="40"
              required
            />
          </div>
          <br />
          <button type="submit">Submit Complaint</button>
        </form>
      </div>
    );
  }
}

export default ComplaintRegister;
