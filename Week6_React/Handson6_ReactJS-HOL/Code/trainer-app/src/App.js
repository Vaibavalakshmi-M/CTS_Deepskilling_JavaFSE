import React from 'react';

function App() {
  const trainer = {
    name: 'Syed Khaleelullah',
    email: 'syed@example.com',
    phone: '+91-9876543210',
    courses: ['Full Stack Web Development', 'ReactJS', 'Node.js']
  };

  const linkStyle = {
    color: 'purple',
    textDecoration: 'underline',
    marginRight: '10px',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    fontSize: '16px',
    fontFamily: 'inherit',
  };

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h1 style={{ color: 'black' }}>My Training Academy</h1>

      <nav style={{ marginBottom: '20px' }}>
        <button style={linkStyle}>Home</button>|
        <button style={linkStyle}>Show Trainers</button>
      </nav>

      <h2 style={{ marginBottom: '10px' }}>Trainer Details</h2>
      <p><strong>Name:</strong> {trainer.name}</p>
      <p><strong>Email:</strong> {trainer.email}</p>
      <p><strong>Phone:</strong> {trainer.phone}</p>

      <h3>Courses:</h3>
      <ul>
        {trainer.courses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
