import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');

  const increment = () => {
    sayHello();
    setCount(prev => prev + 1);
  };

  const sayHello = () => {
    alert("Hello! This is a static message.");
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  const sayWelcome = (message) => {
    alert(`Say ${message}`);
  };

  const handleClick = () => {
    alert("I was clicked");
  };

  const handleSubmit = () => {
    const converted = (parseFloat(amount) / 90).toFixed(2); // just a dummy conversion
    alert(`Converted money to '${currency}' is ${converted}`);
  };

  return (
    <div className="App">
      <h2>Event Examples App</h2>

      <div>
        <p>Counter: {count}</p>
        <button onClick={increment}>Increment</button>
        <br />
        <button onClick={decrement}>Decrement</button>
      </div>

      <div>
        <br />
        <button onClick={() => sayWelcome("Welcome")}>Say Welcome</button>
      </div>

      <div>
        <br />
        <button onClick={handleClick}>Synthetic Event</button>
      </div>

      <div>
        <br />
        <h3>Currency Converter</h3>
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <br /><br />
        <label>
          Currency:
          <input
            type="text"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          />
        </label>
        <br /><br />
        <button onClick={handleSubmit}>Convert</button>
      </div>
    </div>
  );
}

export default App;
