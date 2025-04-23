import React from 'react';
import { useParams } from 'react-router-dom';

function Fibonacci() {
  const { username } = useParams();
  return (
    <div className="text-center mt-5">
      <h2>Welcome, {username}!</h2>
      <h2>Fibonacci Generator</h2>
    </div>
  );
}

export default Fibonacci;
