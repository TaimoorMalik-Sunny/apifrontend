// Screen1.js
import React from 'react';

const Screen1 = ({ onNext }:any) => {

  return (
    <div>
      <h2>Screen 1</h2>
      <p>This is the content of screen 1.</p>
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default Screen1;
