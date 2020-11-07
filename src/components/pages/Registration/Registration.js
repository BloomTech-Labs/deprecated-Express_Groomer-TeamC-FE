import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
  return (
    <div>
      <h2>Are you a...</h2>
      <Link to="/groomers">Groomer</Link>
      <Link to="/customers">Customer</Link>
    </div>
  );
};

export default Registration;
