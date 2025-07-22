import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails({ name, status, startDate, coach, trainer }) {
  const statusColor = {
    color: status.toLowerCase() === 'ongoing' ? 'green' : 'blue'
  };

  return (
    <div className={styles.box}>
      <h3 style={statusColor}>{name}</h3>
      <dl>
        <dt>Status:</dt>
        <dd>{status}</dd>
        <dt>Start Date:</dt>
        <dd>{startDate}</dd>
        <dt>Coach:</dt>
        <dd>{coach}</dd>
        <dt>Trainer:</dt>
        <dd>{trainer}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;
