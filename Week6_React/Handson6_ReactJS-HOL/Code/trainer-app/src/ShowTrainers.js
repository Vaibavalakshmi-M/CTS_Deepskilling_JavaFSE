import React from 'react';
import { Link } from 'react-router-dom';

const trainers = [
  { id: 1, name: 'Alice', coach: 'Mr. John' },
  { id: 2, name: 'Bob', coach: 'Ms. Sarah' },
  { id: 3, name: 'Charlie', coach: 'Mr. Mike' },
];

function ShowTrainers() {
  return (
    <div>
      <h2>Cohort Details</h2>
      {trainers.map((trainer) => (
        <div key={trainer.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h3>{trainer.name}</h3>
          <p>Coach: {trainer.coach}</p>
          <Link to={`/trainer/${trainer.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default ShowTrainers;
