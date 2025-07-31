import React, { useState } from 'react';

const EmailRegister = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim().length < 5) {
      alert('Full name must be at least 5 characters long!');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Email is not valid!');
      return;
    }

    if (password.length < 8) {
      alert('Password must be 8 characters long!');
      return;
    }

    alert('Registration Successful!');
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Register Here!!!</h1>
      <form onSubmit={handleSubmit}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Name:</label>
          <input
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Email:</label>
          <input
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Password:</label>
          <input
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.centerButton}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  heading: {
    color: 'red',
  },
  inputGroup: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10px',
  },
  label: {
    width: '100px',
    textAlign: 'right',
    marginRight: '10px',
  },
  input: {
    width: '200px',
    padding: '5px',
  },
  centerButton: {
    marginTop: '15px',
  },
};

export default EmailRegister;
