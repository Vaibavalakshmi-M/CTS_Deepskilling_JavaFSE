import React from 'react';

export function OddPlayers({ players: [first, , third, , fifth] }) {
  return (
    <div>
      <h2>Odd Players</h2>
      <ul>
        <li>First: {first}</li>
        <li>Third: {third}</li>
        <li>Fifth: {fifth}</li>
      </ul>
    </div>
  );
}

export function EvenPlayers({ players: [, second, , fourth, , sixth] }) {
  return (
    <div>
      <h2>Even Players</h2>
      <ul>
        <li>Second: {second}</li>
        <li>Fourth: {fourth}</li>
        <li>Sixth: {sixth}</li>
      </ul>
    </div>
  );
}

const IndianPlayers = () => {
  const all = ["Sachin1", "Dhoni2", "Virat3", "Rohit4", "Yuvaraj5", "Raina6"];

  const t20 = ["First Player", "Second Player", "Third Player"];
  const ranji = ["Fourth Player", "Fifth Player", "Sixth Player"];
  const merged = [...t20, ...ranji];

  return (
    <div>
      <OddPlayers players={all} />
      <EvenPlayers players={all} />

      <h2>List of Indian Players Merged:</h2>
      <ul>
        {merged.map((item, index) => (
          <li key={index}>Mr. {item}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
