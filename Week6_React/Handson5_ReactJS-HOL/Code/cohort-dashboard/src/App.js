import React from 'react';
import CohortDetails from './Components/CohortDetails';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'left' }}>Cohort Details</h2>
      <CohortDetails
        name="React Bootcamp"
        status="Ongoing"
        startDate="June 10, 2025"
        coach="Aishu"
        trainer="Harsh"
      />
      <CohortDetails
        name="Angular Sprint"
        status="Completed"
        startDate="May 1, 2025"
        coach="Deepak"
        trainer="Nikita"
      />
      <CohortDetails
        name="Vue Workshop"
        status="Upcoming"
        startDate="August 5, 2025"
        coach="Hinata"
        trainer="Suman"
      />
    </div>
  );
}

export default App;
