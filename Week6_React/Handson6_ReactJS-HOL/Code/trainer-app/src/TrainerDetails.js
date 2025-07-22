import React from 'react';
import TrainerDetails from './TrainerDetails';

function App() {
  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h1>My Academy Trainers App</h1>
      <nav style={{ marginBottom: '20px' }}>
        <span style={{
          marginRight: '15px',
          color: 'blueviolet',
          textDecoration: 'underline',
          cursor: 'pointer'
        }}>Home</span>
        <span style={{
          color: 'blueviolet',
          textDecoration: 'underline',
          cursor: 'pointer'
        }}>Show Trainers</span>
      </nav>
      <TrainerDetails />
    </div>
  );
}

export default App;
