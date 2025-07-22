import React, { Component } from 'react';

class OnlineShopping extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        { name: "TV", price: 40000 },
        { name: "Mobile", price: 20000 },
        { name: "Tablet", price: 30000 },
        { name: "Laptop", price: 50000 }
      ]
    };
  }

  render() {
    const { items } = this.state;

    return (
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <h2>Items Ordered</h2>
        
        <div style={styles.outerBox}>
          {/* Headers */}
          <div style={styles.row}>
            <div style={styles.cell}>Name</div>
            <div style={styles.cell}>Price</div>
          </div>

          {/* Items */}
          {items.map((item, index) => (
            <div key={index} style={styles.row}>
              <div style={styles.cell}>{item.name}</div>
              <div style={styles.cell}>{item.price}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const styles = {
  outerBox: {
    display: 'inline-block',
    border: '2px solid black',
    padding: '10px',
    marginTop: '10px'
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '5px'
  },
  cell: {
    border: '1px solid black',
    padding: '10px',
    margin: '5px',
    minWidth: '100px',
    textAlign: 'center'
  }
};

export default OnlineShopping;
