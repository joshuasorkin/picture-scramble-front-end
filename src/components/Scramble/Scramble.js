import React from 'react';
import './Scramble.css'; // Import the CSS file

export default function Scramble({ word }) {
  // Split the word into individual letters
  const letters = word.split('');

  return (
    <div className="scramble-container">
      {letters.map((letter, index) => (
        <span key={index} className="scramble-letter">
          {letter}
        </span>
      ))}
    </div>
  );
}