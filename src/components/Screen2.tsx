// Screen2.js
import React from 'react';

const Screen2 = ({ onPrevious }:any) => {
  return (
    <div>
      <h2>Screen 2</h2>
      <p>This is the content of screen 2.</p>
      <button onClick={onPrevious}>Previous</button>
    </div>
  );
};

export default Screen2;
