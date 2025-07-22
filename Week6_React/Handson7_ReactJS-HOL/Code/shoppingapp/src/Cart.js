import React, { Component } from 'react';

class Cart extends Component {
  render() {
    return (
      <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
        <h4>{this.props.itemname}</h4>
        <p>Price: {this.props.price}</p>
      </div>
    );
  }
}

export default Cart;
