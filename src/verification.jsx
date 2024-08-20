import React, { useState, useEffect } from 'react';
import Login from './login';

import { useParams } from 'react-router-dom';
const Verification = () => {
  const { token } = useParams();
  const [message, setMessage] = useState('');

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await fetch(`http://localhost:5000/verify/${token}`, {
          method: 'GET'
        });

        const result = await response.text();
        setMessage(result);
      } catch (error) {
        console.error('Error verifying email:', error);
        setMessage('Failed to verify email.');
      }
    };

    verifyEmail();
  }, [token]);

  return (
    <div className="verification-container">
      <h2>{message}, <a src="./login.jsx"/> </h2>
    </div>
  );
};

export default Verification;
