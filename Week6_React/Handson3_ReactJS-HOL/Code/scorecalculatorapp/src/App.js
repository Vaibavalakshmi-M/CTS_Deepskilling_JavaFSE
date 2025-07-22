// src/App.js
import React from 'react';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div className="App">
      <CalculateScore 
        name="Aishu" 
        school="ABC Public School" 
        total={450} 
        goal={500} 
      />
    </div>
  );
}

export default App;
